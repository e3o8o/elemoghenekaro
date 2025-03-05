# Preterag Site Project Structure

This document provides an overview of the project structure for the Preterag website.

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