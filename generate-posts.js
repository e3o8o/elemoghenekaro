const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const marked = require('marked');

// Fix the paths to be relative to the script location
const POSTS_DIR = path.join(__dirname, 'writing/_posts');
const OUTPUT_FILE = path.join(__dirname, 'writing/posts.json');

// Only exclude the template post - it serves as documentation
const TEMPLATE_POST = '2000-12-31-template-post.md';

// Validate post data
function isValidPost(data, filename) {
    // Required fields
    if (!data.title || typeof data.title !== 'string' || data.title.trim() === '') {
        console.warn(`Warning: Post ${filename} has invalid or missing title`);
        return false;
    }

    if (!data.date || !(data.date instanceof Date) && isNaN(new Date(data.date))) {
        console.warn(`Warning: Post ${filename} has invalid or missing date`);
        return false;
    }

    // Exclude template post by checking filename
    if (filename === TEMPLATE_POST) {
        return false;
    }

    return true;
}

try {
    // Ensure posts directory exists
    if (!fs.existsSync(POSTS_DIR)) {
        console.warn(`Creating posts directory at ${POSTS_DIR}`);
        fs.mkdirSync(POSTS_DIR, { recursive: true });
    }

    // Read all markdown files from the posts directory
    const posts = fs.readdirSync(POSTS_DIR)
        .filter(filename => {
            // Only include .md files and exclude template
            return filename.endsWith('.md') && filename !== TEMPLATE_POST;
        })
        .map(filename => {
            try {
                const filePath = path.join(POSTS_DIR, filename);
                const content = fs.readFileSync(filePath, 'utf8');
                const { data, content: markdownContent } = matter(content);
                
                // Convert date string to Date object
                if (data.date && typeof data.date === 'string') {
                    data.date = new Date(data.date);
                }
                
                // Validate post data
                if (!isValidPost(data, filename)) {
                    return null;
                }
                
                // Convert markdown to HTML
                const htmlContent = marked.parse(markdownContent);
                
                // Extract first paragraph for excerpt if not provided in frontmatter
                let excerpt = data.excerpt;
                if (!excerpt) {
                    const firstParagraph = markdownContent.split('\n\n')[0];
                    excerpt = firstParagraph.replace(/^#\s+/, '').slice(0, 200) + '...';
                }
                
                // Create post object with strict type checking
                const postData = {
                    id: filename.replace('.md', ''),
                    title: String(data.title).trim(),
                    date: data.date,
                    tags: Array.isArray(data.tags) ? data.tags.map(tag => String(tag).trim()) : [],
                    excerpt: String(excerpt).trim(),
                    url: filename.replace('.md', '.html'),
                    content: htmlContent
                };

                // Handle banner specifically
                if (data.banner === false) {
                    postData.banner = false;
                } else if (data.banner) {
                    postData.banner = data.banner;
                } else {
                    postData.banner = {
                        path: "assets/images/banner_dark.png",
                        alt: "Default Banner"
                    };
                }

                return postData;
            } catch (error) {
                console.error(`Error processing file ${filename}:`, error);
                return null;
            }
        })
        .filter(post => post !== null)
        .sort((a, b) => b.date - a.date);

    // Create the output directory if it doesn't exist
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write the posts data to posts.json
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
    console.log(`Generated ${posts.length} posts in ${OUTPUT_FILE}`);
} catch (error) {
    console.error('Error generating posts:', error);
    process.exit(1);
} 