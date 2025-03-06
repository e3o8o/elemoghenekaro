document.addEventListener('DOMContentLoaded', async () => {
    const postsContainer = document.getElementById('posts-container');
    
    // Load posts
    await loadPosts();
    
    async function loadPosts() {
        try {
            const response = await fetch('writing/posts.json');
            
            if (!response.ok) {
                throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
            }
            
            const posts = await response.json();
            
            if (!posts || posts.length === 0) {
                showNoPostsMessage();
                return;
            }
            
            const postsHTML = posts.map(post => `
                <div class="list-item">
                    <h3>${post.title}</h3>
                    <p>${post.excerpt || ''}</p>
                    <div class="list-item-meta">
                        <span><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                        <span><i class="far fa-user"></i> ${formatAuthors(post.authors)}</span>
                    </div>
                    <a href="${post.url}" class="list-item-link">
                        Read More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `).join('');
            
            postsContainer.innerHTML = postsHTML;
        } catch (error) {
            console.error('Error loading posts:', error);
            showNoPostsMessage();
        }
    }
    
    function showNoPostsMessage() {
        postsContainer.innerHTML = `
            <div class="list-item no-posts">
                <h3>No Posts Yet</h3>
                <p>Check back soon for new content!</p>
            </div>
        `;
    }
    
    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    function formatAuthors(authors) {
        if (!authors) return '';
        if (!Array.isArray(authors)) return authors;
        
        return authors
            .filter(author => author.trim())
            .map((author, index, arr) => {
                if (index === arr.length - 1) return author;
                return `${author}, `;
            })
            .join('');
    }
}); 