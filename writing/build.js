const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const marked = require('marked');

const POSTS_DIR = path.join(__dirname, '_posts');
const OUTPUT_FILE = path.join(__dirname, 'posts.json');
// Define the template post to exclude
const TEMPLATE_POST = '2000-12-31-template-post.md';
const TEMPLATE_HTML = '2000-12-31-template-post.html';

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

function getBannerSettings(post) {
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
    const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md') && file !== TEMPLATE_POST);
    
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
    const templatePath = path.join(__dirname, 'post-template.html');
    const template = fs.readFileSync(templatePath, 'utf-8');

    // Check the original template CSS path
    const originalCssPathMatch = template.match(/<link[^>]*href="[^"]*writing\.css"[^>]*>/);
    console.log('Original template CSS path:', originalCssPathMatch ? originalCssPathMatch[0] : 'Not found');

    // Process each markdown file
    const postsHtml = posts.map(post => {
        // Create a fresh copy of the template for each post
        let postHtml = template;
        
        // Check initial post HTML CSS path
        const initialPostCssPathMatch = postHtml.match(/<link[^>]*href="[^"]*writing\.css"[^>]*>/);
        console.log('Initial post HTML CSS path:', initialPostCssPathMatch ? initialPostCssPathMatch[0] : 'Not found');
        
        // Replace all instances of {{title}}
        postHtml = postHtml.replace(/\{\{title\}\}/g, post.title);
        
        // Handle banner
        if (post.banner) {
            // Remove the no-banner section first
            postHtml = postHtml.replace(/\{\{(\^banner\}\})([\s\S]*?)(\{\{\/banner\}\})/gm, '');
            // Then handle the banner section
            postHtml = postHtml
                .replace(/\{\{#banner\}\}([\s\S]*?)\{\{\/banner\}\}/gm, '$1')
                .replace('{{banner}}', post.banner.path)
                .replace('{{banner_alt}}', post.banner.alt);
        } else {
            // Remove the banner section first
            postHtml = postHtml.replace(/\{\{#banner\}\}[\s\S]*?\{\{\/banner\}\}/gm, '');
            // Then handle the no-banner section
            postHtml = postHtml
                .replace('{{^banner}}', '')
                .replace('{{/banner}}', '');
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

        // Check CSS path before fix
        const beforeFixCssPathMatch = postHtml.match(/<link[^>]*href="[^"]*writing\.css"[^>]*>/);
        console.log('CSS path before fix:', beforeFixCssPathMatch ? beforeFixCssPathMatch[0] : 'Not found');

        // Ensure CSS paths are correct for GitHub Pages
        if (postHtml.includes('href="../writing/writing.css"')) {
            // Already correct, do nothing
            console.log('CSS path is already correct');
        } else {
            // Fix any incorrect references to writing.css
            postHtml = postHtml.replace(
                /<link[^>]*href="[^"]*writing\.css"[^>]*>/,
                '<link rel="stylesheet" href="../writing/writing.css">'
            );
        }
        
        // Check CSS path after fix
        const afterFixCssPathMatch = postHtml.match(/<link[^>]*href="[^"]*writing\.css"[^>]*>/);
        console.log('CSS path after fix:', afterFixCssPathMatch ? afterFixCssPathMatch[0] : 'Not found');
        
        // Write the file
        const postPath = path.join(__dirname, post.url);
        fs.writeFileSync(postPath, postHtml);
        
        // Check final file CSS path
        const finalHtml = fs.readFileSync(postPath, 'utf-8');
        const finalCssPathMatch = finalHtml.match(/<link[^>]*href="[^"]*writing\.css"[^>]*>/);
        console.log('Final post HTML CSS path:', finalCssPathMatch ? finalCssPathMatch[0] : 'Not found');
        
        return post;
    });
    
    console.log(`Generated posts.json with ${posts.length} posts`);
}

generatePostsJson(); 