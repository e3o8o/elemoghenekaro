// GitHub API endpoints
const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'preterag';
const REPO_NAME = 'pipe-pop';

// Elements
const starsElement = document.getElementById('pipe-pop-stars');
const forksElement = document.getElementById('pipe-pop-forks');
const contributorsElement = document.getElementById('pipe-pop-contributors');

// Fetch repository stats
async function fetchRepoStats() {
    try {
        // Fetch basic repo info
        const repoResponse = await fetch(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}`);
        const repoData = await repoResponse.json();
        
        // Update stars and forks
        if (starsElement) starsElement.textContent = repoData.stargazers_count;
        if (forksElement) forksElement.textContent = repoData.forks_count;
        
        // Fetch contributors
        const contributorsResponse = await fetch(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contributors`);
        const contributorsData = await contributorsResponse.json();
        
        // Update contributors count
        if (contributorsElement) {
            contributorsElement.textContent = contributorsData.length;
        }
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
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
    
    // Refresh stats every 5 minutes
    setInterval(fetchRepoStats, 5 * 60 * 1000);
}); 