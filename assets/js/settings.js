// Global Settings Management
const globalSettings = {
    settings: {
        theme: 'dark' // Default theme
    },

    initialize() {
        // Load saved settings from localStorage
        const savedSettings = localStorage.getItem('preteragSettings');
        if (savedSettings) {
            this.settings = JSON.parse(savedSettings);
        }

        // Apply initial theme without animation
        document.documentElement.setAttribute('data-theme', this.settings.theme);

        // Check system preference
        if (!savedSettings) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.settings.theme = prefersDark ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', this.settings.theme);
        }
    },

    getSetting(key) {
        return this.settings[key];
    },

    setSetting(key, value) {
        this.settings[key] = value;
        localStorage.setItem('preteragSettings', JSON.stringify(this.settings));
    },

    toggleTheme() {
        const newTheme = this.settings.theme === 'light' ? 'dark' : 'light';
        this.setSetting('theme', newTheme);
        // Add animation class only when toggling
        document.documentElement.classList.add('theme-changing');
        document.documentElement.setAttribute('data-theme', newTheme);
        setTimeout(() => {
            document.documentElement.classList.remove('theme-changing');
        }, 100); // Reduced from 250ms to 100ms
    }
};

// Initialize settings when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    globalSettings.initialize();
}); 