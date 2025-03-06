# Development Guide

## Quick Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build all content
npm run build:all
```

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