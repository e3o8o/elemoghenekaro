const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const marked = require('marked');

const POSTS_DIR = path.join(__dirname, '_posts');
const OUTPUT_FILE = path.join(__dirname, 'posts.json');
// Define the template post to exclude
const TEMPLATE_POST = '2000-12-31-template-post.md';
const TEMPLATE_HTML = '2000-12-31-template-post.html';
// Define default banner settings
const DEFAULT_BANNER = {
    path: "assets/images/banner_dark.png",
    alt: "Elem Oghenekaro Banner"
};
const BANNER_LIGHT = {
    path: "assets/images/banner_light.png",
    alt: "Elem Oghenekaro Light Banner"
};

// Create posts directory if it doesn't exist
if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
}

// Check if template HTML file exists from previous builds and remove it
const templateHtmlPath = path.join(__dirname, TEMPLATE_HTML);
if (fs.existsSync(templateHtmlPath)) {
    try {
        fs.unlinkSync(templateHtmlPath);
        console.log(`Removed template post HTML file: ${TEMPLATE_HTML}`);
    } catch (error) {
        console.error(`Error removing template post HTML file: ${error.message}`);
    }
}

/**
 * Determines the banner settings for a post
 * 
 * The system supports several banner options:
 * 1. Default (dark) banner: Used when no banner is specified
 * 2. Light banner: Used when banner.path is set to assets/images/banner_light.png
 * 3. Custom banner: Used when a custom path is provided
 * 4. No banner: Used when banner is explicitly set to false
 * 
 * @param {Object} post - The post object containing banner information
 * @returns {Object|false} Banner settings with path and alt text, or false for no banner
 */
function getBannerSettings(post) {
    // Special case for no banner
    if (post.banner === false) {
        return false; // Explicitly indicate no banner
    }
    
    // If post has custom banner settings
    if (post.banner) {
        // If banner is an object with display: false
        if (typeof post.banner === 'object' && post.banner.display === false) {
            return false; // Explicitly indicate no banner
        }
        
        // If banner is an object with path
        if (typeof post.banner === 'object' && post.banner.path) {
            return {
                path: post.banner.path,
                alt: post.banner.alt || 'Post Banner'
            };
        }
        // If banner is a string (path)
        if (typeof post.banner === 'string') {
            return {
                path: post.banner,
                alt: 'Post Banner'
            };
        }
        // Special case for banner_light
        if (post.banner === 'light' || post.banner.type === 'light') {
            return BANNER_LIGHT;
        }
    }

    // If no banner is specified, return default dark banner
    return DEFAULT_BANNER;
}

/**
 * Generates JSON data for all posts and creates HTML files
 * 
 * This function:
 * 1. Reads all markdown files from the _posts directory
 * 2. Parses the frontmatter and content
 * 3. Generates a posts.json file with all post data
 * 4. Creates individual HTML files for each post using the post-template.html
 */
function generatePostsJson() {
    const posts = [];
    
    // Read all markdown files, exclude template post
    const files = fs.readdirSync(POSTS_DIR)
        .filter(file => file.endsWith('.md') && file !== TEMPLATE_POST);
    
    files.forEach(file => {
        const filePath = path.join(POSTS_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // Parse frontmatter and content
        const { data, content: markdown } = matter(content);
        
        // Convert markdown to HTML
        const html = marked.parse(markdown);
        
        // Use frontmatter excerpt if available, otherwise generate from content
        const excerpt = data.excerpt || html
            .split('</p>')[0]
            .replace(/<[^>]+>/g, '')
            .trim()
            .slice(0, 200) + '...';
        
        // Generate URL - use external_url if available
        const url = data.external_url || file.replace('.md', '.html');
        
        // Handle both single author and multiple authors
        const authors = data.authors || [data.author];

        // Get banner settings
        const banner = getBannerSettings(data);
        
        posts.push({
            title: data.title,
            date: data.date,
            authors: authors,
            excerpt: excerpt,
            url: url,
            content: html,
            banner: banner,
            external: !!data.external_url
        });
    });
    
    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Write posts.json
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
    
    // Only generate HTML files for non-external posts
    posts.filter(post => !post.external).forEach(post => {
        const templatePath = path.join(__dirname, 'post-template.html');
        const template = fs.readFileSync(templatePath, 'utf-8');
        
        // Process template
        let postHtml = template;
        
        // Replace title and other metadata
        postHtml = postHtml.replace(/\{\{title\}\}/g, post.title);
        
        // Handle banner
        if (post.banner === false) {
            postHtml = postHtml.replace(/\{\{#banner\}\}[\s\S]*?\{\{\/banner\}\}/gm, '');
            postHtml = postHtml.replace(/\{\{(\^banner\}\})([\s\S]*?)(\{\{\/banner\}\})/gm, '');
            postHtml = postHtml.replace(/<img[^>]*class="post-banner"[^>]*>/g, '');
        } else if (post.banner) {
            postHtml = postHtml.replace(/\{\{(\^banner\}\})([\s\S]*?)(\{\{\/banner\}\})/gm, '');
            postHtml = postHtml
                .replace(/\{\{#banner\}\}([\s\S]*?)\{\{\/banner\}\}/gm, '$1')
                .replace('{{banner}}', post.banner.path)
                .replace('{{banner_alt}}', post.banner.alt);
        }
        
        // Format date
        const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Handle tags
        const tagsHtml = post.tags ? `<span><i class="fas fa-tags"></i> ${post.tags.join(', ')}</span>` : '';
        
        // Replace content and metadata
        postHtml = postHtml
            .replace('{{date}}', formattedDate)
            .replace(/\{\{#tags\}\}.*?\{\{\/tags\}\}/gs, tagsHtml)
            .replace('{{content}}', post.content);

        // Ensure CSS paths are correct
        if (!postHtml.includes('href="../writing/writing.css"')) {
            postHtml = postHtml.replace(
                /<link[^>]*href="[^"]*writing\.css"[^>]*>/,
                '<link rel="stylesheet" href="../writing/writing.css">'
            );
        }
        
        // Write the file
        const postPath = path.join(__dirname, post.url);
        fs.writeFileSync(postPath, postHtml);
    });
    
    console.log(`Generated posts.json with ${posts.length} posts`);
}

generatePostsJson(); 