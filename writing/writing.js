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
            typeof post.url === 'string' &&
            (!post.tags || Array.isArray(post.tags));
            
        if (!isValid) {
            console.log('Invalid post:', post);
        }
        return isValid;
    }
    
    async function loadPosts() {
        try {
            // Debug base href resolution
            const baseElement = document.querySelector('base');
            const baseHref = baseElement?.getAttribute('href') || '/';
            
            const isGitHubPages = window.location.hostname === 'e3o8o.github.io';
            console.log('Environment:', { isGitHubPages, baseHref });
            
            // Load posts from posts.json
            const postsJsonPath = isGitHubPages ? `${baseHref}writing/posts.json` : 'writing/posts.json';
            console.log('Loading posts from:', postsJsonPath);
            
            const response = await fetch(postsJsonPath);
            if (!response.ok) {
                throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
            }
            
            const posts = await response.json();
            console.log('Posts loaded:', posts.length);
            
            if (posts.length === 0) {
                console.log('No posts found');
                showNoPostsMessage();
                return;
            }
            
            const postsHTML = posts.map(post => {
                try {
                    // For external posts, use the URL directly
                    // For internal posts, prepend the correct path
                    const postUrl = post.external ? post.url : 
                        (isGitHubPages ? `${baseHref}writing/${post.url}` : `writing/${post.url}`);
                    
                    const externalIcon = post.external ? '<i class="fas fa-external-link-alt" style="margin-left: 4px;"></i>' : '';
                    const xIcon = post.external ? '<span class="post-source"><i class="fab fa-x-twitter"></i> Posted on X</span>' : '';
                    
                    return `
                        <div class="list-item">
                            <h3>${post.title}${externalIcon}</h3>
                            <p>${post.excerpt || ''}</p>
                            <div class="list-item-meta">
                                <span><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                                ${post.tags && post.tags.length > 0 ? `<span><i class="fas fa-tags"></i> ${post.tags.join(', ')}</span>` : ''}
                                ${xIcon}
                            </div>
                            <a href="${postUrl}" class="list-item-link" ${post.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                                ${post.external ? 'View on X' : 'Read More'} <i class="fas fa-arrow-right"></i>
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
            } else {
                showNoPostsMessage();
            }
        } catch (error) {
            console.error('Error loading posts:', error);
            console.error('Full error details:', error.stack);
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