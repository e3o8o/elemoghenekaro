# Development Guide

## Setup

No build tools or dependencies required. Simply clone and serve:

```bash
git clone https://github.com/preterag/preterag-site.git
cd preterag-site
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

## Adding New Pages

1. Create a new HTML file in the appropriate directory
2. Include required stylesheets:
```html
<link rel="stylesheet" href="/assets/css/palette.css">
<link rel="stylesheet" href="/assets/css/base.css">
<link rel="stylesheet" href="/assets/css/components.css">
<link rel="stylesheet" href="/assets/css/layout.css">
```

3. Use the standard page structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - Preterag</title>
    <!-- Stylesheets -->
</head>
<body>
    <header class="site-header">
        <!-- Standard navigation -->
    </header>
    <main class="content">
        <!-- Page content using list-style layout -->
    </main>
    <footer class="site-footer">
        <!-- Standard footer -->
    </footer>
</body>
</html>
```

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

## Testing

- Test all changes across multiple browsers
- Ensure mobile responsiveness
- Check performance using Lighthouse
- Validate HTML and CSS
- Test theme switching functionality
- Verify navigation consistency

## Documentation

- Update documentation when making significant changes
- Document complex components
- Keep the README up to date
- Include code examples where helpful 