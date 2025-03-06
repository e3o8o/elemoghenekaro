# Development Guide

## Setup

1. Clone the repository:
```bash
git clone https://github.com/preterag/preterag-site.git
cd preterag-site
```

2. Install dependencies:
```bash
npm install
cd writing && npm install
```

3. Start local server:
```bash
python3 -m http.server 4000
```

## Directory Structure

- `assets/` - Core assets (CSS, JS, images)
  - `css/` - Modular stylesheet system
  - `js/` - JavaScript utilities
  - `images/` - Site assets
- `about/` - About section pages
- `building/` - Building section content
- `contributing/` - Contributing guidelines
- `writing/` - Writing and blog content
- `docs/` - Project documentation

## Styling System

### CSS Organization
- `palette.css` - Color variables and themes
- `base.css` - Base styles and resets
- `components.css` - Reusable components
- `layout.css` - Layout and structure

### Navigation System
The site uses a consistent header navigation across all pages:
```html
<header class="site-header">
    <a href="/" class="logo">
        <img src="/assets/images/preterag_fav_icon.png" alt="Preterag Logo">
    </a>
    <nav class="header-nav">
        <a href="/building" class="nav-link">Building</a>
        <a href="/contributing" class="nav-link">Contributing</a>
        <a href="/writing" class="nav-link">Writing</a>
        <a href="/about" class="nav-link">About</a>
    </nav>
    <button class="theme-toggle" aria-label="Toggle theme">
        <i class="fas fa-moon"></i>
    </button>
</header>
```

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: ≤ 480px
  - Tablet: ≤ 768px
  - Desktop: > 768px
- Adaptive navigation:
  - Full navigation on desktop
  - Simplified navigation on mobile
  - Consistent header height across breakpoints

### Theme System
- Light/Dark mode support
- Theme persistence using localStorage
- System preference detection
- Smooth theme transitions

## Blog System

The blog system uses Markdown files with front matter for content management.

### Writing Posts

1. Create a new file in `writing/_posts/` following the format:
```
YYYY-MM-DD-post-title.md
```

2. Add front matter at the top of your post:
```md
---
title: Your Post Title
description: A brief description of your post
authors: ["Author Name", "Second Author"]  # Multiple authors supported
banner: /path/to/banner-image.jpg         # Optional banner image
---
```

3. Write your post content in Markdown below the front matter.

### Building Posts

1. Navigate to the writing directory:
```bash
cd writing
```

2. Run the build script:
```bash
npm run build
```

This will:
- Parse all Markdown files in `_posts/`
- Generate HTML files in `posts/`
- Update `posts.json` for the post listing

### Post Guidelines

- Use descriptive titles and URLs
- Include a meaningful description
- Add all authors who contributed
- Keep banner images under 2MB
- Use relative paths for internal links

## Theme System

The site uses a Caribbean-inspired color palette with dark/light modes:

- Dark mode: Teal to Midnight Green gradient
- Light mode: Beige to Honeydew gradient

Colors are defined in `assets/css/palette.css`.

## Development Workflow

1. Create feature branch from development:
```bash
git checkout -b feature/your-feature development
```

2. Make changes and test locally

3. Commit changes:
```bash
git add .
git commit -m "Description of changes"
```

4. Push to GitHub:
```bash
git push origin feature/your-feature
```

5. Create pull request to development branch

## Code Style

- Use semantic HTML5 elements
- Follow BEM methodology for CSS
- Keep JavaScript modular and minimal
- Comment complex logic
- Test across browsers

## Testing

Test all changes in multiple browsers and devices:
- Desktop: Chrome, Firefox, Safari
- Mobile: iOS Safari, Android Chrome
- Different screen sizes and orientations

## Deployment

See [Deployment Guide](DEPLOYMENT.md) for details on deploying changes.

## Best Practices

1. **Accessibility**
   - Use semantic HTML
   - Include proper ARIA labels
   - Maintain good color contrast
   - Ensure keyboard navigation

2. **Performance**
   - Optimize images
   - Minimize external dependencies
   - Use system fonts when possible
   - Implement smooth transitions

3. **Maintenance**
   - Keep CSS organized by component
   - Follow existing naming conventions
   - Document any complex functionality
   - Use consistent spacing and indentation

4. **Mobile Optimization**
   - Test on various devices
   - Ensure touch targets are adequate
   - Optimize for different screen sizes
   - Consider network performance

## Coding Standards

### HTML
- Use HTML5 doctype
- Use semantic HTML elements
- Validate HTML using [W3C Validator](https://validator.w3.org/)
- Maintain consistent indentation

### CSS
- Follow BEM (Block, Element, Modifier) naming conventions
- Organize CSS by component
- Use variables for colors and spacing
- Implement mobile-first media queries

### JavaScript
- Use ES6+ features
- Keep functions small and focused
- Comment complex logic
- Implement error handling

## Git Workflow

1. Create a branch for each feature or bugfix
2. Make small, focused commits with clear messages
3. Push your branch and create a pull request
4. Request code reviews
5. Merge to main branch after approval

## Documentation

- Update documentation when making significant changes
- Document complex components
- Keep the README up to date
- Include code examples where helpful 