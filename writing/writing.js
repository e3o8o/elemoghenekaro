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
            // Allow either url or externalUrl
            (typeof post.url === 'string' || typeof post.externalUrl === 'string') &&
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
            
            // Load both regular and external posts
            console.log('Loading posts...');
            const regularPosts = await loadRegularPosts(baseHref, isGitHubPages);
            const externalPosts = await loadExternalPosts(baseHref, isGitHubPages);
            
            console.log('Loaded posts:', {
                regularPosts: regularPosts.length,
                externalPosts: externalPosts.length
            });
            
            // Combine and sort all posts by date
            const allPosts = [...regularPosts, ...externalPosts].sort((a, b) => 
                new Date(b.date) - new Date(a.date)
            );
            
            console.log('Total posts:', allPosts.length);
            
            if (allPosts.length === 0) {
                console.log('No posts found');
                showNoPostsMessage();
                return;
            }
            
            const postsHTML = allPosts.map(post => {
                try {
                    // Handle both regular and external posts
                    const isExternal = !!post.externalUrl;
                    const postUrl = isExternal 
                        ? post.externalUrl 
                        : (isGitHubPages ? `${baseHref}writing/${post.url}` : `writing/${post.url}`);
                    
                    return `
                        <div class="list-item">
                            <h3>${post.title}</h3>
                            <p>${post.excerpt || ''}</p>
                            <div class="list-item-meta">
                                <span><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                                ${post.tags && post.tags.length > 0 ? `<span><i class="fas fa-tags"></i> ${post.tags.join(', ')}</span>` : ''}
                                ${post.source ? `<span><i class="fas fa-external-link-alt"></i> ${post.source}</span>` : ''}
                            </div>
                            <a href="${postUrl}" class="list-item-link" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>
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
    
    async function loadRegularPosts(baseHref, isGitHubPages) {
        const postsJsonPath = isGitHubPages 
            ? `${baseHref}writing/posts.json`
            : 'writing/posts.json';
            
        console.log('Loading regular posts from:', postsJsonPath);
            
        try {
            const response = await fetch(postsJsonPath);
            if (!response.ok) {
                throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
            }
            const posts = await response.json();
            console.log('Regular posts loaded:', posts.length);
            return Array.isArray(posts) ? posts.filter(post => isValidPost(post)) : [];
        } catch (error) {
            console.error('Error loading regular posts:', error);
            return [];
        }
    }
    
    async function loadExternalPosts(baseHref, isGitHubPages) {
        const externalPostsPath = isGitHubPages 
            ? `${baseHref}data/external-posts.json`
            : 'data/external-posts.json';
            
        console.log('Loading external posts from:', externalPostsPath);
            
        try {
            const response = await fetch(externalPostsPath);
            if (!response.ok) {
                console.warn('No external posts found:', response.status, response.statusText);
                return [];
            }
            const posts = await response.json();
            console.log('External posts loaded:', posts.length);
            return Array.isArray(posts) ? posts.filter(post => isValidPost(post)) : [];
        } catch (error) {
            console.warn('Error loading external posts:', error);
            return [];
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