# Project Structure

## Overview

The site is organized as a static website with a clean, modular structure:

```
elemoghenekaro/
├── assets/              # Core assets
│   ├── css/            # Modular stylesheets
│   │   ├── palette.css # Theme system
│   │   ├── base.css    # Base styles
│   │   ├── components.css # UI components
│   │   └── layout.css  # Layout & responsive system
│   ├── js/             # JavaScript files
│   │   ├── theme.js    # Theme handling
│   │   └── navigation.js # Navigation behavior
│   └── images/         # Image assets
├── writing/           # Writing section
│   └── index.html     # Writing page with list layout
├── docs/              # Documentation
│   ├── DEVELOPMENT.md # Development guidelines
│   ├── PROJECT_STRUCTURE.md # This file
│   └── DEPLOYMENT.md  # Deployment procedures
└── index.html         # Main entry point
```

## Navigation Structure

```
Home
└── Writing
    └── Blog Posts
```

## Responsive Design Structure

### Desktop (> 768px)
- Full navigation menu
- Expanded content layout
- Hover interactions

### Tablet (≤ 768px)
- Adjusted navigation spacing
- Responsive grid layout
- Touch-optimized interactions

### Mobile (≤ 480px)
- Simplified navigation
- Single-column layout
- Optimized touch targets

## Theme System

- Light/Dark mode toggle
- System preference detection
- Theme persistence
- Smooth transitions

## Dependencies

The website maintains minimal external dependencies:
- FontAwesome for icons
- Google Fonts (Gothic A1)
- No JavaScript frameworks
- No CSS frameworks

## Development Workflow

1. Create feature branch
2. Implement changes following style guide
3. Test across all breakpoints
4. Create pull request
5. Review and merge to main
6. Deploy to production

## Performance Considerations

- Optimized asset loading
- Minimal JavaScript usage
- Efficient CSS organization
- Mobile-first approach
- Responsive images 