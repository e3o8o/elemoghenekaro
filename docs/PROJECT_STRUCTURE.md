# Project Structure

## Overview

```
.
├── assets/           # Static assets
│   ├── css/         # Stylesheets
│   ├── images/      # Images and icons
│   └── js/          # JavaScript modules
├── writing/         # Blog content
│   ├── _posts/     # Markdown posts
│   └── build.js    # Post builder
├── tools/          # Development utilities
├── docs/           # Documentation
└── index.html      # Main entry point
```

## Key Files

### Root
- `index.html` - Main entry point and layout
- `sitemap.xml` - SEO sitemap
- `robots.txt` - Search engine directives
- `CNAME` - Custom domain config

### Assets
- `css/palette.css` - Color schemes
- `css/style.css` - Core styles
- `js/main.js` - Core functionality
- `js/theme.js` - Theme switcher

### Writing
- `_posts/*.md` - Blog posts
- `build.js` - Post builder script
- `posts.json` - Generated post data

## Post Format

```markdown
---
title: Post Title
date: YYYY-MM-DD
excerpt: Brief description
external_url: https://example.com (optional)
source: Source Name (optional)
---

Post content in Markdown
```

## Build Process

1. `build.js` reads posts from `writing/_posts/`
2. Generates `posts.json` with metadata
3. Main site loads posts from JSON
4. External posts link to original source 