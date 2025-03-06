# Writing System Documentation

This directory contains the blog/writing system for the website. The system allows you to write posts in Markdown and automatically generates HTML files with the correct styling and structure.

## Directory Structure

- `_posts/`: Contains all the Markdown files for posts
- `posts.json`: Generated JSON file containing all post data
- `build.js`: Script to generate HTML files from the Markdown content
- `post-template.html`: HTML template used for all posts
- `writing.css`: Styling specific to the writing/blog section
- `writing.js`: JavaScript functionality for the writing section

## Creating a New Post

1. Create a new Markdown file in the `_posts/` directory with the filename format: `YYYY-MM-DD-post-title.md`
2. Add the required frontmatter (see the template post for reference)
3. Write your content in Markdown format
4. Run the build script to generate the HTML files

## Banner System

The banner system has been updated to handle different types of banners:

- **Default (Dark)**: If no banner is specified, the system automatically uses `assets/images/banner_dark.png`
- **Light Banner**: For posts that need a lighter banner, specify `assets/images/banner_light.png` in the frontmatter
- **Custom Banner**: You can specify a path to your own custom banner image

Example frontmatter for using the light banner:

```yaml
banner:
  path: assets/images/banner_light.png
  alt: "Light Banner Alt Text"
```

## Build Process

The build process follows these steps:

1. `npm run generate`: Reads all Markdown files in `_posts/` and generates `posts.json`
2. `npm run build:writing`: Takes the data from `posts.json` and generates HTML files for each post using `post-template.html`
3. `npm run build:all`: Combines both steps above for convenience

## Template Post

A template post is available at `_posts/2000-12-31-template-post.md`. This file serves as documentation for the post format and is automatically excluded from the build process.

## Style Considerations

All posts use the main website styling through linked CSS files:
- `../assets/css/palette.css`
- `../assets/css/base.css`
- `../assets/css/components.css`
- `../assets/css/layout.css`
- `../writing/writing.css`

The build script ensures that all paths are correctly set in the generated HTML files. 