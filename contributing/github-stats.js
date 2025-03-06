// GitHub API endpoints
const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'preterag';
const REPO_NAME = 'pipe-pop';

// Elements
const starsElement = document.getElementById('pipe-pop-stars');
const forksElement = document.getElementById('pipe-pop-forks');
const contributorsElement = document.getElementById('pipe-pop-contributors');

// Fetch with timeout and rate limit handling
async function fetchWithTimeout(url, options = {}) {
    const timeout = 5000; // 5 second timeout
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
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

// Fetch repository stats
async function fetchRepoStats() {
    try {
        // Fetch basic repo info
        const repoResponse = await fetchWithTimeout(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}`);
        if (!repoResponse) return;
        
        const repoData = await repoResponse.json();
        
        // Animate stars and forks
        if (starsElement) animateNumber(starsElement, repoData.stargazers_count);
        if (forksElement) animateNumber(forksElement, repoData.forks_count);
        
        // Fetch contributors
        const contributorsResponse = await fetchWithTimeout(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contributors`);
        if (!contributorsResponse) return;
        
        const contributorsData = await contributorsResponse.json();
        
        // Animate contributors count
        if (contributorsElement) {
            animateNumber(contributorsElement, contributorsData.length);
        }
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Show error state in UI
        const elements = [starsElement, forksElement, contributorsElement];
        elements.forEach(el => {
            if (el) el.textContent = '–';
        });
    }
}

// Add number animation
function animateNumber(element, finalNumber) {
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
    fetchRepoStats();
    
    // Refresh stats every 5 minutes if the tab is visible
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