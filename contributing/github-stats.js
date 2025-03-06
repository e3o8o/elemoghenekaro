// GitHub API endpoints
const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'preterag';
const REPO_NAME = 'pipe-pop';

// Cache configuration
const CACHE_KEY = 'github_stats_cache';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

// Elements
const starsElement = document.getElementById('pipe-pop-stars');
const forksElement = document.getElementById('pipe-pop-forks');
const contributorsElement = document.getElementById('pipe-pop-contributors');
const cachedIndicator = document.getElementById('stats-cached');

// Cache management
function getCachedStats() {
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (!cached) return null;
        
        const { timestamp, data } = JSON.parse(cached);
        if (Date.now() - timestamp > CACHE_DURATION) {
            localStorage.removeItem(CACHE_KEY);
            return null;
        }
        
        return data;
    } catch (error) {
        console.warn('Error reading cache:', error);
        return null;
    }
}

function setCachedStats(data) {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            data
        }));
    } catch (error) {
        console.warn('Error setting cache:', error);
    }
}

// Loading state management
function setLoadingState(isLoading) {
    const elements = [starsElement, forksElement, contributorsElement];
    elements.forEach(el => {
        if (!el) return;
        if (isLoading) {
            el.innerHTML = '<span class="loading-placeholder">Loading...</span>';
        }
    });
}

function setCachedState(isCached) {
    if (cachedIndicator) {
        cachedIndicator.style.display = isCached ? 'inline-flex' : 'none';
    }
}

// Fetch with timeout and rate limit handling
async function fetchWithTimeout(url, options = {}) {
    const timeout = 5000; // 5 second timeout
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal,
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                ...options.headers
            }
        });

        clearTimeout(id);

        // Handle rate limiting
        if (response.status === 403 && response.headers.get('X-RateLimit-Remaining') === '0') {
            const resetTime = new Date(response.headers.get('X-RateLimit-Reset') * 1000);
            console.warn(`Rate limited until ${resetTime.toLocaleString()}`);
            return null;
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response;
    } catch (error) {
        clearTimeout(id);
        if (error.name === 'AbortError') {
            throw new Error('Request timed out');
        }
        throw error;
    }
}

// Update UI with stats
function updateStats(data, isCached = false) {
    if (starsElement) animateNumber(starsElement, data.stars);
    if (forksElement) animateNumber(forksElement, data.forks);
    if (contributorsElement) animateNumber(contributorsElement, data.contributors);
    setCachedState(isCached);
}

// Fetch repository stats
async function fetchRepoStats() {
    setLoadingState(true);
    setCachedState(false);

    try {
        // Try to get cached data first
        const cachedData = getCachedStats();
        if (cachedData) {
            updateStats(cachedData, true);
        }

        // Fetch basic repo info
        const repoResponse = await fetchWithTimeout(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}`);
        if (!repoResponse) {
            if (!cachedData) setErrorState();
            return;
        }
        
        const repoData = await repoResponse.json();
        
        // Fetch contributors
        const contributorsResponse = await fetchWithTimeout(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contributors`);
        if (!contributorsResponse) {
            if (!cachedData) setErrorState();
            return;
        }
        
        const contributorsData = await contributorsResponse.json();
        
        // Update cache and UI
        const newData = {
            stars: repoData.stargazers_count,
            forks: repoData.forks_count,
            contributors: contributorsData.length
        };
        
        setCachedStats(newData);
        updateStats(newData, false);
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        const cachedData = getCachedStats();
        if (cachedData) {
            updateStats(cachedData, true);
        } else {
            setErrorState();
        }
    }
}

// Error state
function setErrorState() {
    const elements = [starsElement, forksElement, contributorsElement];
    elements.forEach(el => {
        if (el) el.textContent = '–';
    });
    setCachedState(false);
}

// Add number animation
function animateNumber(element, finalNumber) {
    // Clear any loading placeholder
    element.textContent = '0';
    
    const duration = 1000; // Animation duration in milliseconds
    const start = parseInt(element.textContent) || 0;
    const increment = (finalNumber - start) / (duration / 16); // 60fps
    let current = start;
    
    const animate = () => {
        current += increment;
        element.textContent = Math.round(current);
        
        if (increment > 0 && current < finalNumber || 
            increment < 0 && current > finalNumber) {
            requestAnimationFrame(animate);
        } else {
            element.textContent = finalNumber;
        }
    };
    
    requestAnimationFrame(animate);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Try to show cached data immediately
    const cachedData = getCachedStats();
    if (cachedData) {
        updateStats(cachedData, true);
    }
    
    // Then fetch fresh data
    fetchRepoStats();
    
    // Refresh stats periodically if the tab is visible
    let interval;
    
    function startInterval() {
        interval = setInterval(fetchRepoStats, 5 * 60 * 1000);
    }
    
    function stopInterval() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }
    
    // Only refresh when the tab is visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopInterval();
        } else {
            fetchRepoStats(); // Refresh immediately when becoming visible
            startInterval();
        }
    });
    
    startInterval();
}); 