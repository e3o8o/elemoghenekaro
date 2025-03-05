# Development Guidelines

This document outlines the development guidelines for the Preterag website.

## Setting Up the Development Environment

1. Clone the repository:
   ```bash
   git clone https://github.com/preterag/preterag-site.git
   cd preterag-site
   ```

2. No build steps are required as this is a static site. You can simply open the `index.html` file in a browser to view the site locally.

3. Alternatively, you can use a local development server:
   ```bash
   # Using Python
   python -m http.server
   
   # Using Node.js with npm
   npm install -g http-server
   http-server
   ```

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