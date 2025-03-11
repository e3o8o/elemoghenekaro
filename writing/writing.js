document.addEventListener('DOMContentLoaded', async () => {
    const postsContainer = document.getElementById('posts-container');
    
    try {
        // Load both regular and external posts
        const [regularResponse, externalResponse] = await Promise.all([
            fetch('writing/posts.json'),
            fetch('data/external-posts.json')
        ]);
        
        const regularPosts = await regularResponse.json();
        const externalPosts = await externalResponse.json();
        
        // Transform external posts to match regular post format
        const transformedExternalPosts = externalPosts.map(post => ({
            title: post.title,
            date: new Date(post.date),
            excerpt: post.excerpt,
            url: post.externalUrl,
            external: true,
            source: post.source
        }));
        
        // Combine and sort all posts by date
        const allPosts = [...regularPosts, ...transformedExternalPosts]
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        
        allPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'list-item';
            
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.excerpt || ''}</p>
                <div class="list-item-meta">
                    <span><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                    ${post.authors ? `<span><i class="far fa-user"></i> ${post.authors.join(', ')}</span>` : ''}
                    ${post.tags ? `<span><i class="fas fa-tags"></i> ${post.tags.join(', ')}</span>` : ''}
                    ${post.source ? `<span><i class="fas fa-external-link-alt"></i> ${post.source}</span>` : ''}
                </div>
                <a href="${post.external ? post.url : `writing/${post.url}`}" 
                   class="list-item-link" 
                   ${post.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                    Read More <i class="fas fa-external-link-alt"></i>
                </a>
            `;
            
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error loading posts:', error);
        postsContainer.innerHTML = '<p>Error loading posts. Please try again later.</p>';
    }
    
    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}); 