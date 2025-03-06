# Blog Posts

This directory contains all blog posts for the Preterag website. Each post is written in Markdown format with YAML frontmatter.

## Creating a New Post

1. Copy the template file:
   ```bash
   cp 2000-12-31-template-post.md YYYY-MM-DD-your-post-title.md
   ```
   Replace `YYYY-MM-DD` with today's date and `your-post-title` with a URL-friendly version of your title.

2. Edit the frontmatter:
   - Update `title`, `date`, and `authors`
   - Choose your banner option (see Banner Options below)
   - Remove the template comments and examples

3. Write your content in Markdown format

4. Build the site:
   ```bash
   cd writing && node build.js
   ```

## Banner Options

1. **Default Banner** (banner-no-logo.png)
   - Simply remove the banner field from frontmatter
   ```yaml
   ---
   title: "Your Title"
   date: 2024-03-07
   authors: ["Your Name"]
   ---
   ```

2. **No Banner**
   - Set banner to false
   ```yaml
   ---
   title: "Your Title"
   date: 2024-03-07
   authors: ["Your Name"]
   banner: false
   ---
   ```

3. **Custom Banner**
   - Simple path:
   ```yaml
   banner: assets/images/your-banner.jpg
   ```
   - With alt text:
   ```yaml
   banner:
     path: assets/images/your-banner.jpg
     alt: Your alt text
   ```

## File Structure

- `2000-12-31-template-post.md` - Template for new posts
- `README.md` - This documentation
- `*.md` - Individual post files
- `posts.json` - Generated post data (do not edit directly) 