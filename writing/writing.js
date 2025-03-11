document.addEventListener('DOMContentLoaded', async () => {
    const postsContainer = document.getElementById('posts-container');
    
    // Load posts
    await loadPosts();
    
    // Validate post data
    function isValidPost(post) {
        const isValid = post &&
            typeof post.title === 'string' && post.title.trim() !== '' &&
            post.date && !isNaN(new Date(post.date)) &&
            typeof post.excerpt === 'string' &&
            (typeof post.url === 'string' || typeof post.external_url === 'string');
            
        if (!isValid) {
            console.log('Invalid post:', post);
        }
        return isValid;
    }
    
    async function loadPosts() {
        try {
            const baseElement = document.querySelector('base');
            const baseHref = baseElement?.getAttribute('href') || '/';
            const isGitHubPages = window.location.hostname === 'e3o8o.github.io';
            
            const postsJsonPath = isGitHubPages 
                ? `${baseHref}writing/posts.json`
                : 'writing/posts.json';
                
            const response = await fetch(postsJsonPath);
            if (!response.ok) {
                throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
            }
            
            const posts = await response.json();
            
            if (posts.length === 0) {
                showNoPostsMessage();
                return;
            }
            
            const postsHTML = posts.map(post => {
                try {
                    const isExternal = post.external;
                    const postUrl = isExternal ? post.url : (isGitHubPages ? `${baseHref}writing/${post.url}` : `writing/${post.url}`);
                    
                    return `
                        <div class="list-item">
                            <h3>${post.title} ${isExternal ? '<span class="external-indicator">on X</span>' : ''}</h3>
                            <p>${post.excerpt || ''}</p>
                            <div class="list-item-meta">
                                <span><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                                ${post.tags && post.tags.length > 0 ? `<span><i class="fas fa-tags"></i> ${post.tags.join(', ')}</span>` : ''}
                            </div>
                            <a href="${postUrl}" class="list-item-link" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                                ${isExternal ? 'View on X' : 'Read More'} <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    `;
                } catch (error) {
                    console.error('Error rendering post:', error);
                    return '';
                }
            }).filter(html => html !== '').join('');
            
            if (postsHTML) {
                postsContainer.innerHTML = postsHTML;
                
                // Add styles for external indicator without modifying existing CSS files
                const style = document.createElement('style');
                style.textContent = `
                    .external-indicator {
                        font-size: 0.8em;
                        padding: 2px 6px;
                        border-radius: 3px;
                        background-color: var(--accent-color);
                        color: var(--bg-color);
                        margin-left: 8px;
                        vertical-align: middle;
                    }
                `;
                document.head.appendChild(style);
            } else {
                showNoPostsMessage();
            }
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
        try {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (error) {
            console.error('Error formatting date:', error);
            return 'Invalid Date';
        }
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