// Social Links Configuration
const socialConfig = {
    links: {
        linkedin: "https://www.linkedin.com/in/elemoghenekaro/",
        github: "https://github.com/e3o8o",
        twitter: "https://x.com/elemoghenekaro",
        instagram: "https://instagram.com/elemoghenekaro",
        email: "mailto:elemoghenekaro@gmail.com"
    },

    // Generate HTML for social links
    generateSocialLinks() {
        return `
            <div class="social-links" style="color: var(--accent-color)">
                <a href="${this.links.linkedin}" target="_blank" aria-label="LinkedIn" style="color: var(--accent-color)"><i class="fab fa-linkedin"></i></a>
                <a href="${this.links.github}" target="_blank" aria-label="GitHub" style="color: var(--accent-color)"><i class="fab fa-github"></i></a>
                <a href="${this.links.twitter}" target="_blank" aria-label="X (formerly Twitter)" style="color: var(--accent-color)"><i class="fab fa-x-twitter"></i></a>
                <a href="${this.links.instagram}" target="_blank" aria-label="Instagram" style="color: var(--accent-color)"><i class="fab fa-instagram"></i></a>
                <a href="${this.links.email}" aria-label="Email" style="color: var(--accent-color)"><i class="fas fa-envelope"></i></a>
            </div>
        `;
    },

    // Update JSON-LD data
    getSocialSameAs() {
        return [
            this.links.linkedin,
            this.links.github,
            this.links.twitter,
            this.links.instagram
        ];
    },

    // Initialize social links on the page
    initialize() {
        // Update footer social links
        const footer = document.querySelector('.site-footer');
        if (footer) {
            footer.innerHTML = this.generateSocialLinks();
        }

        // Update JSON-LD data
        const jsonLd = document.querySelector('script[type="application/ld+json"]');
        if (jsonLd) {
            const data = JSON.parse(jsonLd.textContent);
            data.sameAs = this.getSocialSameAs();
            jsonLd.textContent = JSON.stringify(data, null, 2);
        }
    }
};

// Initialize social links when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    socialConfig.initialize();
}); 