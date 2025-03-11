# Development Guide

## Prerequisites

- Node.js (v18+)
- npm or yarn
- Basic knowledge of JavaScript and Markdown

## Development Server

```bash
npm start
```

This starts a local server at `http://localhost:3000` with live reload.

## File Structure

```
.
├── assets/          # Static assets (CSS, images)
├── writing/         # Blog posts and build scripts
├── tools/          # Development utilities
└── docs/           # Documentation
```

## Writing Posts

### Local Posts

1. Create a new post:
```bash
./post-utils.sh add '{"title":"My Post","date":"YYYY-MM-DD","excerpt":"Brief description"}'
```

2. Edit the generated Markdown file in `writing/_posts/`.

### External Posts

1. Add an external post:
```bash
./post-utils.sh add '{"title":"External Post","date":"YYYY-MM-DD","excerpt":"Brief description","externalUrl":"https://example.com","source":"Source Name"}'
```

## Building

```bash
# Build posts only
npm run build:posts

# Build everything
npm run build:all
```

## SEO & Indexing

1. Update `sitemap.xml` with new posts
2. Submit sitemap to search consoles:
   - Google Search Console
   - Bing Webmaster Tools
   - Yandex.Webmaster

## Best Practices

1. Keep posts focused and well-structured
2. Use descriptive titles and excerpts
3. Optimize images before adding
4. Test on multiple devices
5. Keep dependencies minimal

## Content Management

### Blog Posts

1. **Regular Posts**
   ```bash
   # Create new post in writing/_posts/
   touch writing/_posts/YYYY-MM-DD-post-title.md
   
   # Add frontmatter
   ---
   title: "Your Title"
   date: YYYY-MM-DD
   authors: ["Author Name"]
   tags: ["Tag1", "Tag2"]
   excerpt: "Brief description"
   banner:
     path: assets/images/your-banner.jpg
     alt: Banner description
   ---
   ```

2. **External Posts**
   ```bash
   # Add external post
   ./post-utils.sh add '{
     "title": "Post Title",
     "date": "YYYY-MM-DD",
     "excerpt": "Brief description",
     "externalUrl": "https://example.com",
     "source": "Source Name"
   }'
   
   # Delete post
   ./post-utils.sh delete "post-url-or-external-url"
   ```

3. **Build Posts**
   ```bash
   cd writing && node build.js
   ```

### Banner Options

1. **Default Banner**
   ```yaml
   # Remove banner field from frontmatter
   ---
   title: "Your Title"
   date: YYYY-MM-DD
   authors: ["Your Name"]
   ---
   ```

2. **No Banner**
   ```yaml
   banner: false
   ```

3. **Custom Banner**
   ```yaml
   banner:
     path: assets/images/your-banner.jpg
     alt: Your alt text
   ```

## Theme System

### Features
- Light/Dark mode toggle
- System preference detection
- Theme persistence in localStorage
- Smooth transitions
- Caribbean-inspired palette

### Colors
```css
/* Dark Mode */
--caribbean-current: #003838
--teal: #004B4B
--midnight-green: #001A1A
--spring-green: #00F5A3

/* Light Mode */
--beige: #F5F5DC
--honeydew: #F0FFF0
```

## Development Tools

### Post Management
- `post-utils.js` - Core post management functions
- `post-utils.sh` - CLI wrapper for post operations
- `build.js` - Post builder and HTML generator

### Helper Tools
- `tools/post-helper.html` - External post helper UI
- Theme toggle with system preference detection
- Automated post sorting and JSON generation

## Deployment

1. **Prepare Changes**
   ```bash
   git add .
   git commit -m "your commit message"
   ```

2. **Deploy**
   ```bash
   git push origin main
   ```

3. **Domain Setup**
   - A Records:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - CNAME: `www` → `e3o8o.github.io`

## Best Practices

### Code Style
- Semantic HTML5 elements
- BEM methodology for CSS
- ES6+ JavaScript
- Mobile-first responsive design

### Performance
- Optimized images
- Minimal dependencies
- System fonts
- Efficient CSS organization

### Content
- Clear, concise writing
- Professional yet personal tone
- Consistent branding
- Regular documentation updates 