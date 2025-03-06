// Theme Management
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    
    function updateThemeIcon() {
        const currentTheme = globalSettings.getSetting('theme');
        const icon = currentTheme === 'light' ? 'moon' : 'sun';
        themeToggle.innerHTML = `<i class="fas fa-${icon}"></i>`;
    }
    
    if (themeToggle) {
        // Update initial icon
        updateThemeIcon();
        
        // Add click event listener
        themeToggle.addEventListener('click', () => {
            globalSettings.toggleTheme();
            updateThemeIcon();
        });
    }
}); 