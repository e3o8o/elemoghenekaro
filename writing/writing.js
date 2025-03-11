document.addEventListener('DOMContentLoaded', async () => {
    const postsContainer = document.getElementById('posts-container');
    
    try {
        const response = await fetch('writing/posts.json');
        const posts = await response.json();
        
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'list-item';
            
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.excerpt || ''}</p>
                <div class="list-item-meta">
                    <span><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                    ${post.authors ? `<span><i class="far fa-user"></i> ${post.authors.join(', ')}</span>` : ''}
                    ${post.tags ? `<span><i class="fas fa-tags"></i> ${post.tags.join(', ')}</span>` : ''}
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