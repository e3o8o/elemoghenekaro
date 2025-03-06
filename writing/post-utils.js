const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

/**
 * Adds a new external post to external-posts.json
 * @param {Object} postData - The post data containing title, date, excerpt, externalUrl, and source
 * @returns {Promise<Object>} Result of the operation
 */
async function addExternalPost(postData) {
    try {
        const { title, date, excerpt, externalUrl, source } = postData;
        
        // Validate required fields
        if (!title || !date || !excerpt || !externalUrl || !source) {
            return {
                success: false,
                message: 'Missing required fields. Need title, date, excerpt, externalUrl, and source.'
            };
        }

        const externalPostsPath = path.join(__dirname, '..', 'data', 'external-posts.json');
        
        // Read and parse external posts
        const externalPosts = JSON.parse(fs.readFileSync(externalPostsPath, 'utf8'));
        
        // Check if post with same URL already exists
        if (externalPosts.some(post => post.externalUrl === externalUrl)) {
            return {
                success: false,
                message: `An external post with URL ${externalUrl} already exists`
            };
        }
        
        // Add new post
        externalPosts.push({
            title,
            date,
            excerpt,
            externalUrl,
            source
        });
        
        // Sort posts by date (newest first)
        externalPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Write back to file
        fs.writeFileSync(externalPostsPath, JSON.stringify(externalPosts, null, 2));
        
        console.log(`Added external post: "${title}" to external-posts.json`);
        
        return {
            success: true,
            message: `Successfully added external post: "${title}"`
        };
    } catch (error) {
        console.error('Error adding external post:', error);
        return {
            success: false,
            message: error.message
        };
    }
}

/**
 * Adds a new regular post
 * @param {Object} postData - The post data containing title, date, content, and optional banner
 * @returns {Promise<Object>} Result of the operation
 */
async function addPost(postData) {
    try {
        const { title, date, content, banner } = postData;
        
        // Validate required fields
        if (!title || !date || !content) {
            return {
                success: false,
                message: 'Missing required fields. Need title, date, and content.'
            };
        }

        const baseDir = __dirname;
        const postsDir = path.join(baseDir, '_posts');
        
        // Create slug from title
        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        
        // Create filename with date and slug
        const datePrefix = new Date(date).toISOString().split('T')[0];
        const mdFilename = `${datePrefix}-${slug}.md`;
        const mdPath = path.join(postsDir, mdFilename);
        
        // Check if file already exists
        if (fs.existsSync(mdPath)) {
            return {
                success: false,
                message: `A post with filename ${mdFilename} already exists`
            };
        }
        
        // Create markdown content
        let markdown = '---\n';
        markdown += `title: "${title}"\n`;
        markdown += `date: "${date}"\n`;
        if (banner) {
            markdown += `banner: "${banner}"\n`;
        }
        markdown += '---\n\n';
        markdown += content;
        
        // Write markdown file
        fs.writeFileSync(mdPath, markdown);
        console.log(`Created markdown file: ${mdFilename}`);
        
        // Run the build script to update posts.json and create HTML
        await new Promise((resolve, reject) => {
            exec('node build.js', { cwd: baseDir }, (error, stdout, stderr) => {
                if (error) {
                    console.error('Error running build script:', error);
                    reject(error);
                    return;
                }
                console.log(stdout);
                if (stderr) console.error(stderr);
                resolve();
            });
        });
        
        return {
            success: true,
            message: `Successfully added post: "${title}" and rebuilt posts.json`
        };
    } catch (error) {
        console.error('Error adding post:', error);
        return {
            success: false,
            message: error.message
        };
    }
}

/**
 * Deletes an external post from external-posts.json
 * @param {string} externalUrl - The URL of the external post to delete
 * @returns {Promise<Object>} Result of the operation
 */
async function deleteExternalPost(externalUrl) {
    try {
        const externalPostsPath = path.join(__dirname, '..', 'data', 'external-posts.json');
        
        // Read and parse external posts
        const externalPosts = JSON.parse(fs.readFileSync(externalPostsPath, 'utf8'));
        
        // Find the post index
        const postIndex = externalPosts.findIndex(post => post.externalUrl === externalUrl);
        
        if (postIndex === -1) {
            return {
                success: false,
                message: `No external post found with URL: ${externalUrl}`
            };
        }
        
        // Remove the post
        const removedPost = externalPosts.splice(postIndex, 1)[0];
        
        // Write back to file
        fs.writeFileSync(externalPostsPath, JSON.stringify(externalPosts, null, 2));
        
        console.log(`Deleted external post: "${removedPost.title}" from external-posts.json`);
        
        return {
            success: true,
            message: `Successfully deleted external post: "${removedPost.title}"`
        };
    } catch (error) {
        console.error('Error deleting external post:', error);
        return {
            success: false,
            message: error.message
        };
    }
}

/**
 * Deletes a post and its associated files, then rebuilds the posts list
 * @param {string} filename - The filename of the post to delete (e.g., '2024-03-07-test-no-banner.md')
 * @returns {Promise<Object>} Result of the operation
 */
async function deletePost(filename) {
    try {
        // If the input looks like a URL, treat it as an external post
        if (filename.startsWith('http://') || filename.startsWith('https://')) {
            return await deleteExternalPost(filename);
        }

        const baseDir = __dirname;
        const postsDir = path.join(baseDir, '_posts');
        
        // Get both MD and HTML filenames
        const mdFile = filename.endsWith('.md') ? filename : `${filename}.md`;
        const htmlFile = filename.replace('.md', '.html');
        
        // Full paths
        const mdPath = path.join(postsDir, mdFile);
        const htmlPath = path.join(baseDir, htmlFile);
        
        // Delete markdown file if it exists
        if (fs.existsSync(mdPath)) {
            fs.unlinkSync(mdPath);
            console.log(`Deleted markdown file: ${mdFile}`);
        }
        
        // Delete HTML file if it exists
        if (fs.existsSync(htmlPath)) {
            fs.unlinkSync(htmlPath);
            console.log(`Deleted HTML file: ${htmlFile}`);
        }
        
        // Run the build script to update posts.json
        await new Promise((resolve, reject) => {
            exec('node build.js', { cwd: baseDir }, (error, stdout, stderr) => {
                if (error) {
                    console.error('Error running build script:', error);
                    reject(error);
                    return;
                }
                console.log(stdout);
                if (stderr) console.error(stderr);
                resolve();
            });
        });
        
        return {
            success: true,
            message: `Successfully deleted post and rebuilt posts.json`
        };
    } catch (error) {
        console.error('Error deleting post:', error);
        return {
            success: false,
            message: error.message
        };
    }
}

/**
 * CLI handler
 */
if (require.main === module) {
    const command = process.argv[2];
    const arg = process.argv[3];
    
    if (!command || !arg) {
        console.error('Please provide a command (add/delete) and the required argument');
        console.error('Usage:');
        console.error('  For deleting:');
        console.error('    node post-utils.js delete <filename>');
        console.error('    node post-utils.js delete <url>');
        console.error('  For adding regular post:');
        console.error('    node post-utils.js add \'{"title":"My Post","date":"2024-03-10","content":"Post content","banner":"optional-banner.jpg"}\'');
        console.error('  For adding external post:');
        console.error('    node post-utils.js add \'{"title":"External Post","date":"2024-03-10","excerpt":"Brief excerpt","externalUrl":"https://example.com","source":"Medium"}\'');
        process.exit(1);
    }
    
    switch (command.toLowerCase()) {
        case 'delete':
            deletePost(arg)
                .then(result => {
                    console.log(result.message);
                    process.exit(result.success ? 0 : 1);
                })
                .catch(error => {
                    console.error('Error:', error);
                    process.exit(1);
                });
            break;
            
        case 'add':
            try {
                const postData = JSON.parse(arg);
                const isExternalPost = 'externalUrl' in postData;
                
                (isExternalPost ? addExternalPost(postData) : addPost(postData))
                    .then(result => {
                        console.log(result.message);
                        process.exit(result.success ? 0 : 1);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        process.exit(1);
                    });
            } catch (error) {
                console.error('Error parsing post data:', error);
                process.exit(1);
            }
            break;
            
        default:
            console.error('Invalid command. Use "add" or "delete".');
            process.exit(1);
    }
}

module.exports = { addPost, addExternalPost, deletePost, deleteExternalPost }; 