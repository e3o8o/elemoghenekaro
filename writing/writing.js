document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');
    
    // Fetch posts
    fetchPosts();
    
    async function fetchPosts() {
        try {
            const response = await fetch('posts.json');
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const posts = await response.json();
            
            if (!posts || posts.length === 0) {
                postsContainer.innerHTML = `
                    <div class="no-posts-message">
                        <i class="fas fa-pen-fancy"></i>
                        <h3>No Posts Yet</h3>
                        <p>Check back soon for new content!</p>
                    </div>
                `;
                return;
            }
            
            const postsHTML = posts.map(post => `
                <div class="list-item">
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <div class="list-item-meta">
                        <span><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                        <span><i class="far fa-clock"></i> ${post.read_time} min read</span>
                        <span><i class="far fa-user"></i> ${post.author}</span>
                    </div>
                    <a href="${post.slug}" class="list-item-link">
                        Read More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `).join('');
            
            postsContainer.innerHTML = postsHTML;
        } catch (error) {
            console.error('Error fetching posts:', error);
            postsContainer.innerHTML = `
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