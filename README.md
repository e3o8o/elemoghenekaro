# Elem Oghenekaro's Personal Site

A minimalist personal site and blog built with vanilla JavaScript and a custom static site generator.

## Features

### Content Management
- Markdown-based blog posts with YAML frontmatter
- External post integration (Medium, etc.)
- Automated post building and sorting
- Custom banner support for posts

### Post Management Tools
- `post-utils.sh` for post operations:
  ```bash
  # Add a new post
  ./post-utils.sh add '{"title":"Post Title","date":"YYYY-MM-DD","excerpt":"Brief description","externalUrl":"https://example.com","source":"Source Name"}'
  
  # Delete a post
  ./post-utils.sh delete "post-url-or-external-url"
  ```

### Design
- Dark/Light theme with system preference detection
- Responsive layout optimized for all devices
- Caribbean-inspired color palette
- Smooth theme transitions

### Development
- Zero-dependency core
- Built-in development server
- Automated build process
- GitHub Pages deployment

## Quick Start

1. Clone and install:
   ```bash
   git clone https://github.com/e3o8o/elemoghenekaro.git
   cd elemoghenekaro
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

3. Build posts:
   ```bash
   npm run build:all
   ```

## Documentation

See the `docs/` directory for detailed documentation:
- [Development Guide](docs/DEVELOPMENT.md)
- [Project Structure](docs/PROJECT_STRUCTURE.md)
- [Design System](docs/DESIGN_SYSTEM.md)
- [Deployment Guide](docs/DEPLOYMENT.md) 