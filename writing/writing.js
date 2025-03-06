document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.querySelector('.posts-grid');
    const viewToggleBtns = document.querySelectorAll('.view-toggle-btn');
    
    // Load saved view preference from localStorage
    const savedView = localStorage.getItem('postsView') || 'grid';
    setView(savedView);
    
    // Add click handlers to toggle buttons
    viewToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            setView(view);
            
            // Save preference to localStorage
            localStorage.setItem('postsView', view);
        });
    });
    
    // Fetch posts from Grav
    fetchPosts();
    
    function setView(view) {
        // Update container classes
        postsContainer.classList.remove('grid-view', 'list-view');
        postsContainer.classList.add(`${view}-view`);
        
        // Update button states
        viewToggleBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === view);
        });
    }
    
    async function fetchPosts() {
        try {
            const response = await fetch('/posts.json');
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const posts = await response.json();
            
            if (!posts || posts.length === 0) {
                document.getElementById('posts-container').innerHTML = `
                    <div class="no-posts-message">
                        <i class="fas fa-pen-fancy"></i>
                        <h3>No Posts Yet</h3>
                        <p>Check back soon for new content!</p>
                    </div>
                `;
                return;
            }
            
            const postsHTML = posts.map(post => `
                <article class="post-card">
                    <div class="post-meta">
                        <time class="post-date">${formatDate(post.date)}</time>
                    </div>
                    <a href="${post.slug}" class="post-title-link">
                        <h3 class="post-title">${post.title}</h3>
                    </a>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-footer">
                        <span class="post-author">
                            <i class="fas fa-user"></i>
                            ${post.author}
                        </span>
                        <span class="post-read-time">
                            <i class="fas fa-clock"></i>
                            ${post.read_time} min read
                        </span>
                    </div>
                </article>
            `).join('');
            
            document.getElementById('posts-container').innerHTML = postsHTML;
        } catch (error) {
            console.error('Error fetching posts:', error);
            document.getElementById('posts-container').innerHTML = `
                <div class="no-posts-message">
                    <i class="fas fa-pen-fancy"></i>
                    <h3>No Posts Yet</h3>
                    <p>Check back soon for new content!</p>
                </div>
            `;
        }
    }
    
    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}); 