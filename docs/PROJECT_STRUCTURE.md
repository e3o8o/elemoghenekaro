# Project Structure

## Overview

The Preterag site is organized as a static website with a clean, modular structure:

```
preterag-site/
├── assets/              # Core assets
│   ├── css/            # Stylesheets
│   │   ├── palette.css # Color system
│   │   ├── base.css    # Base styles
│   │   ├── components.css # UI components
│   │   └── layout.css  # Layout styles
│   ├── js/             # JavaScript files
│   │   ├── settings.js # Site settings
│   │   └── theme.js    # Theme handling
│   └── images/         # Image assets
├── about/              # About section
│   ├── index.html
│   ├── team/
│   └── careers/
├── building/           # Building section
│   └── index.html
├── contributing/       # Contributing section
│   └── index.html
├── writing/           # Writing section
│   ├── index.html
│   ├── writing.css
│   └── writing.js
├── docs/              # Documentation
│   ├── DEVELOPMENT.md
│   ├── PROJECT_STRUCTURE.md
│   └── DEPLOYMENT.md
└── index.html         # Main entry point
```

## Key Components

### 1. Entry Point
- `index.html` - Main landing page
- Contains navigation and social links
- Responsive design with mobile support

### 2. Assets
- **CSS**: Modular stylesheet organization
- **JavaScript**: Minimal, focused scripts
- **Images**: Site logos and icons

### 3. Content Sections
- **About**: Company information
- **Building**: Product development
- **Contributing**: Open source projects
- **Writing**: Blog and articles

### 4. Documentation
- Development guidelines
- Project structure
- Deployment procedures

## Navigation Structure

```
Home
├── Building
│   └── Surrealine (external)
├── Contributing
│   └── Pipe-PoP (external)
├── Writing
└── About
    ├── Team
    └── Careers
```

## Directory Structure

- **assets/** - Contains all static assets for the website
  - **css/** - Stylesheet files
  - **js/** - JavaScript files
  - **images/** - Image files

- **about/** - About page content
- **building/** - Building page content
- **contributing/** - Contributing page content
- **writing/** - Writing section content

- **docs/** - Project documentation
  - **PROJECT_STRUCTURE.md** - This file
  - **DEVELOPMENT.md** - Development guidelines
  - **DEPLOYMENT.md** - Deployment instructions

- **grav-cms/** - Grav CMS files (for backend content management)

## Main Files

- **index.html** - Main entry point for the website
- **README.md** - Project overview and quick start guide
- **.gitignore** - Specifies files that should not be tracked by Git
- **CNAME** - Custom domain configuration for GitHub Pages
- **.nojekyll** - Disables Jekyll processing on GitHub Pages

## Dependencies

The website uses minimal external dependencies:
- FontAwesome for icons
- Google Fonts for typography

## Development Workflow

1. Make changes to HTML, CSS, or JavaScript files
2. Test locally
3. Commit changes
4. Push to the main branch for deployment 