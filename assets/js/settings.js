// Global Settings Management
const globalSettings = {
    settings: {
        theme: localStorage.getItem('theme') || 'dark'
    },
    
    getSetting(key) {
        return this.settings[key];
    },
    
    setSetting(key, value) {
        this.settings[key] = value;
        localStorage.setItem(key, value);
        
        // Apply theme-specific changes
        if (key === 'theme') {
            setTheme(value);
        }
    },
    
    toggleTheme() {
        const currentTheme = this.getSetting('theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setSetting('theme', newTheme);
    }
};

// Initialize theme on page load
document.documentElement.setAttribute('data-theme', globalSettings.getSetting('theme'));

function setTheme(theme) {
    console.debug(`[Theme Debug] Setting theme to: ${theme}`);
    console.debug(`[Theme Debug] Previous theme was: ${document.documentElement.getAttribute('data-theme')}`);
    
    // First, remove any existing animation
    document.documentElement.classList.remove('theme-changing');
    
    // Force a reflow
    void document.documentElement.offsetWidth;
    
    // Apply new theme
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Add animation class
    requestAnimationFrame(() => {
        document.documentElement.classList.add('theme-changing');
        
        // Remove class after animation completes
        setTimeout(() => {
            document.documentElement.classList.remove('theme-changing');
        }, 600); // slightly longer than animation duration
    });
    
    console.debug('[Theme Debug] Theme change complete, animation should trigger');
} 