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
- `about/` - About section pages
- `building/` - Building section content
- `contributing/` - Contributing guidelines
- `writing/` - Writing and blog content
- `docs/` - Project documentation

## Styling

### CSS Organization
- `palette.css` - Color variables and themes
- `base.css` - Base styles and resets
- `components.css` - Reusable components
- `layout.css` - Layout and structure

### Color System
The site uses a Caribbean-themed palette:
- Colors are managed via CSS variables
- Dark/Light theme support
- Consistent accent colors for interactive elements

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
    <!-- Meta tags and stylesheets -->
</head>
<body>
    <a href="/" class="logo">
        <img src="/assets/images/preterag_fav_icon.png" alt="Preterag Logo">
    </a>
    <main class="content">
        <!-- Page content -->
    </main>
</body>
</html>
```

## Best Practices

1. **Accessibility**
   - Use semantic HTML
   - Include proper ARIA labels
   - Maintain good color contrast

2. **Performance**
   - Optimize images
   - Minimize external dependencies
   - Use system fonts when possible

3. **Maintenance**
   - Keep CSS organized by component
   - Follow existing naming conventions
   - Document any complex functionality

## Coding Standards

### HTML
- Use HTML5 doctype
- Use semantic HTML elements
- Validate HTML using [W3C Validator](https://validator.w3.org/)

### CSS
- Follow BEM (Block, Element, Modifier) naming conventions
- Organize CSS by component
- Use variables for colors and consistent spacing

### JavaScript
- Use ES6+ features
- Keep functions small and focused
- Comment complex logic
- Avoid jQuery when vanilla JavaScript can be used

## File Organization

- Place new pages at the root level in their own directories
- Add CSS for specific pages in the page's directory
- Place shared styles in `assets/css/`
- Place shared scripts in `assets/js/`
- Add images to `assets/images/`

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

## Documentation

- Update documentation when making significant changes
- Document complex components
- Keep the README up to date 