// Set dark theme
document.documentElement.setAttribute('data-theme', 'dark');

// Remove theme toggle button from DOM
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.remove();
} 