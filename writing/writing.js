document.addEventListener('DOMContentLoaded', async () => {
    const postsContainer = document.getElementById('posts-container');
    
    // Load posts
    await loadPosts();
    
    // Validate post data
    function isValidPost(post) {
        return post &&
            typeof post.title === 'string' && post.title.trim() !== '' &&
            post.date && !isNaN(new Date(post.date)) &&
            typeof post.excerpt === 'string' &&
            typeof post.url === 'string' &&
            (!post.tags || Array.isArray(post.tags));
    }
    
    async function loadPosts() {
        try {
            // Debug base href resolution
            const baseElement = document.querySelector('base');
            console.log('Base element:', baseElement);
            const baseHref = baseElement?.getAttribute('href') || '/';
            console.log('Base href:', baseHref);
            
            const isGitHubPages = window.location.hostname === 'e3o8o.github.io';
            console.log('Is GitHub Pages:', isGitHubPages);
            
            // Construct paths based on environment
            const postsJsonPath = isGitHubPages 
                ? `${baseHref}writing/posts.json`
                : 'writing/posts.json';
            console.log('Posts JSON path:', postsJsonPath);
            
            const response = await fetch(postsJsonPath);
            console.log('Response:', response);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
            }
            
            const posts = await response.json();
            console.log('Loaded posts:', posts);
            
            if (!Array.isArray(posts)) {
                throw new Error('Posts data is not an array');
            }
            
            // Filter out any invalid posts
            const validPosts = posts.filter(post => isValidPost(post));
            
            if (validPosts.length === 0) {
                showNoPostsMessage();
                return;
            }
            
            const postsHTML = validPosts.map(post => {
                try {
                    // For GitHub Pages, combine base href with post URL
                    const fullUrl = isGitHubPages
                        ? `${baseHref}writing/${post.url}`
                        : `writing/${post.url}`;
                    console.log('Post URL:', fullUrl);
                    
                    return `
                        <div class="list-item">
                            <h3>${post.title}</h3>
                            <p>${post.excerpt || ''}</p>
                            <div class="list-item-meta">
                                <span><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                                ${post.tags && post.tags.length > 0 ? `<span><i class="fas fa-tags"></i> ${post.tags.join(', ')}</span>` : ''}
                            </div>
                            <a href="${fullUrl}" class="list-item-link">
                                Read More <i class="fas fa-arrow-right"></i>
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