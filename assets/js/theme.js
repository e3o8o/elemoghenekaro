// Theme Management
document.addEventListener('DOMContentLoaded', () => {
    // Get the existing theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        // Update initial icon based on current theme
        themeToggle.innerHTML = `<i class="fas fa-${globalSettings.getSetting('theme') === 'light' ? 'moon' : 'sun'}"></i>`;
        
        // Add click event listener
        themeToggle.addEventListener('click', () => {
            globalSettings.toggleTheme();
            themeToggle.innerHTML = `<i class="fas fa-${globalSettings.getSetting('theme') === 'light' ? 'moon' : 'sun'}"></i>`;
        });
    }
}); 