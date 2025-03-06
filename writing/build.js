const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const marked = require('marked');

const POSTS_DIR = path.join(__dirname, '_posts');
const OUTPUT_FILE = path.join(__dirname, 'posts.json');

// Default banner settings
const DEFAULT_BANNER = {
    path: 'assets/images/banner-no-logo.png',
    alt: 'Preterag Banner'
};

// Special post banners
const SPECIAL_BANNERS = {
    'Welcome to Preterag': {
        path: 'assets/images/preterag_banner.jpeg',
        alt: 'Preterag Welcome Banner'
    }
};

// Create posts directory if it doesn't exist
if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
}

function getBannerSettings(post) {
    // Check for special banners first
    if (SPECIAL_BANNERS[post.title]) {
        return {
            path: SPECIAL_BANNERS[post.title].path,
            alt: SPECIAL_BANNERS[post.title].alt
        };
    }

    // If post has custom banner settings
    if (post.banner) {
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
    }

    // If no banner is specified, return null
    return null;
}

function generatePostsJson() {
    const posts = [];
    
    // Read all markdown files
    const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));
    
    files.forEach(file => {
        const filePath = path.join(POSTS_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // Parse frontmatter and content
        const { data, content: markdown } = matter(content);
        
        // Convert markdown to HTML
        const html = marked.parse(markdown);
        
        // Create excerpt (first paragraph, stripped of HTML)
        const excerpt = html
            .split('</p>')[0]
            .replace(/<[^>]+>/g, '')
            .trim()
            .slice(0, 200) + '...';
        
        // Generate URL from filename (now relative to writing directory)
        const url = file.replace('.md', '.html');
        
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
            banner: banner
        });
    });
    
    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Write posts.json
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
    
    // Generate individual HTML files for each post
    const postTemplate = fs.readFileSync(path.join(__dirname, 'post-template.html'), 'utf-8');
    
    posts.forEach(post => {
        let postHtml = postTemplate;
        
        // Replace all instances of {{title}}
        postHtml = postHtml.replace(/\{\{title\}\}/g, post.title);
        
        // Handle banner
        if (post.banner) {
            postHtml = postHtml
                .replace('{{#banner}}', '')
                .replace('{{/banner}}', '')
                .replace('{{banner}}', post.banner.path)
                .replace('{{banner_alt}}', post.banner.alt);
        } else {
            // Remove banner section if no banner
            postHtml = postHtml.replace(/{{#banner}}[\s\S]*?{{\/banner}}/m, '');
        }
        
        postHtml = postHtml
            .replace('{{date}}', new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }))
            .replace('{{#authors}}', '')
            .replace('{{/authors}}', '')
            .replace('{{.}}', post.authors.join('</a><a href="about/index.html#team">'))
            .replace('{{content}}', post.content);
        
        const postPath = path.join(__dirname, post.url);
        fs.writeFileSync(postPath, postHtml);
    });
    
    console.log(`Generated posts.json with ${posts.length} posts`);
}

generatePostsJson(); 