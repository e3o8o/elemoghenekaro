const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const marked = require('marked');

const POSTS_DIR = path.join(__dirname, 'writing/_posts');
const OUTPUT_FILE = path.join(__dirname, 'writing/posts.json');

// Read all markdown files from the posts directory
const posts = fs.readdirSync(POSTS_DIR)
    .filter(filename => filename.endsWith('.md') && !filename.startsWith('README'))
    .map(filename => {
        const filePath = path.join(POSTS_DIR, filename);
        const content = fs.readFileSync(filePath, 'utf8');
        const { data, content: markdownContent } = matter(content);
        
        // Convert markdown to HTML
        const htmlContent = marked.parse(markdownContent);
        
        // Create post object
        return {
            id: filename.replace('.md', ''),
            title: data.title,
            date: data.date,
            tags: data.tags || [],
            excerpt: data.excerpt || markdownContent.split('\n')[0],
            url: filename.replace('.md', '.html'),
            content: htmlContent,
            banner: data.banner || {
                path: "assets/images/banner_dark.png",
                alt: "Default Banner"
            }
        };
    })
    // Sort by date, newest first
    .sort((a, b) => new Date(b.date) - new Date(a.date));

// Write the posts data to posts.json
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
console.log(`Generated ${posts.length} posts in ${OUTPUT_FILE}`); 