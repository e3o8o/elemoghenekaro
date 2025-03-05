# Project Structure

## Overview

The Preterag site is organized as a static website with a clean, modular structure:

```
preterag-site/
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
├── about/              # About section
│   └── index.html     # About page with list layout
├── building/           # Building section
│   └── index.html     # Building page with list layout
├── contributing/       # Contributing section
│   └── index.html     # Contributing page with list layout
├── writing/           # Writing section
│   └── index.html     # Writing page with list layout
├── docs/              # Documentation
│   ├── DEVELOPMENT.md # Development guidelines
│   ├── PROJECT_STRUCTURE.md # This file
│   └── DEPLOYMENT.md  # Deployment procedures
└── index.html         # Main entry point
```

## Key Components

### 1. Entry Point
- `index.html` - Main landing page
- Consistent header navigation
- Responsive design with mobile optimization
- Theme toggle with persistence

### 2. Assets
#### CSS Structure
- **palette.css**: Theme system and color variables
- **base.css**: Reset and base styles
- **components.css**: Reusable UI components
- **layout.css**: Responsive grid and layout system

#### JavaScript
- **theme.js**: Theme management and persistence
- **navigation.js**: Mobile navigation behavior

#### Images
- Site logos and icons
- Optimized for various screen sizes

### 3. Content Sections
All sections follow a consistent structure:
- Unified header navigation
- List-style content layout
- Responsive design patterns
- Mobile-optimized interface

#### About Section
- Company information
- Team overview
- Mission and values

#### Building Section
- Product development
- Surrealine updates
- Technical insights

#### Contributing Section
- Open source projects
- Community guidelines
- Development standards

#### Writing Section
- Blog posts
- Technical articles
- Project updates

### 4. Documentation
- **DEVELOPMENT.md**: Development guidelines and standards
- **PROJECT_STRUCTURE.md**: Codebase organization (this file)
- **DEPLOYMENT.md**: Deployment procedures and checklist

## Navigation Structure

```
Home
├── Building
│   └── Surrealine (external)
├── Contributing
│   └── Open Source
├── Writing
│   └── Blog Posts
└── About
    └── Team
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