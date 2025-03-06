# Preterag Site

The official website for Preterag, showcasing our journey in building [Surrealine](https://surrealine.com).

## Overview

A modern, minimalist landing page featuring:
- Clean, responsive design with consistent navigation
- Simplified list-style layout for content sections
- Dark/Light mode support with persistent theme selection
- Blog system with Markdown support
- Modern UI with Caribbean-themed color palette
- Mobile-optimized interface with adaptive navigation

## Tech Stack

- Pure HTML5, CSS3, and JavaScript
- No frameworks or build tools required
- Font Awesome for icons
- Gothic A1 font family
- Responsive CSS Grid and Flexbox layouts

## Quick Start

1. Clone and serve:
```bash
git clone https://github.com/preterag/preterag-site.git
cd preterag-site
python3 -m http.server 4000
```

2. Visit `http://localhost:4000`

## Adding Blog Posts

1. Create a new Markdown file in `writing/_posts/` with format: `YYYY-MM-DD-title.md`
2. Add front matter:
```md
---
title: Your Post Title
description: Brief description of your post
authors: ["Author Name", "Second Author"]  # Multiple authors supported
banner: /path/to/banner-image.jpg         # Optional banner image
---

Your post content in Markdown
```
3. Build posts: `cd writing && npm run build`

## Project Structure

```
preterag-site/
├── assets/
│   ├── css/         # Modular stylesheets
│   │   ├── palette.css    # Color themes
│   │   ├── base.css      # Base styles
│   │   ├── components.css # UI components
│   │   └── layout.css    # Layout system
│   ├── js/          # JavaScript files
│   └── images/      # Image assets
├── writing/         # Blog system
│   ├── _posts/      # Markdown posts
│   ├── posts/       # Generated HTML
│   └── build.js     # Post builder
├── about/           # About section
├── building/        # Building section
├── contributing/    # Contributing section
└── docs/           # Documentation
```

## Features

- **Blog System**: Write posts in Markdown with front matter support
- **Multi-Author Support**: Add multiple authors to posts
- **Banner Images**: Optional banner images for posts
- **Theme System**: Dark/Light mode with instant switching
- **Responsive Design**: Optimized for all screen sizes
- **Content Organization**: Clear list-style layout for better readability

## Documentation

- [Development Guide](docs/DEVELOPMENT.md)
- [Project Structure](docs/PROJECT_STRUCTURE.md)
- [Design System](docs/DESIGN_SYSTEM.md)
- [Deployment Guide](docs/DEPLOYMENT.md)

## Contact

- Website: [preterag.com](https://preterag.com)
- Email: [hello@preterag.com](mailto:hello@preterag.com)
- X (Twitter): [@preterag](https://x.com/preterag)
- Instagram: [@preterag](https://instagram.com/preterag)
- GitHub: [@preterag](https://github.com/preterag)
- Blog: [mirror.xyz/preterag.eth](https://mirror.xyz/preterag.eth)

## License

MIT License - See [LICENSE](LICENSE) for details 