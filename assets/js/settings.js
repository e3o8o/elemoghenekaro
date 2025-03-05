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
            document.documentElement.setAttribute('data-theme', value);
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