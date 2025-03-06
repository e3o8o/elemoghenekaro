const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const marked = require('marked');

const POSTS_DIR = path.join(__dirname, '_posts');
const OUTPUT_FILE = path.join(__dirname, 'posts.json');

// Create posts directory if it doesn't exist
if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
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
        
        posts.push({
            title: data.title,
            date: data.date,
            authors: authors,
            excerpt: excerpt,
            url: url,
            content: html
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
        
        // Set banner image based on post title
        const bannerImage = post.title === "Welcome to Preterag" 
            ? "assets/images/preterag_banner.jpeg"
            : "assets/images/banner-no-logo.png";
        postHtml = postHtml.replace('{{banner}}', bannerImage);
        
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