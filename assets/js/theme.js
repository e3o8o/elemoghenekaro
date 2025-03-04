// Theme Management
document.addEventListener('DOMContentLoaded', () => {
    // Add theme toggle button to the page
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = `<i class="fas fa-${globalSettings.getSetting('theme') === 'light' ? 'moon' : 'sun'}"></i>`;
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    
    // Add the button to the page
    document.body.appendChild(themeToggle);
    
    // Add click event listener
    themeToggle.addEventListener('click', () => {
        globalSettings.toggleTheme();
        themeToggle.innerHTML = `<i class="fas fa-${globalSettings.getSetting('theme') === 'light' ? 'moon' : 'sun'}"></i>`;
    });
}); 