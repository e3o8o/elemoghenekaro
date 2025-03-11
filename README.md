# Personal Site Template

A minimalist personal site and blog template built with vanilla JavaScript. Features a custom static site generator, dark/light theme, and Markdown-based blog posts. Originally created by [Elem Oghenekaro](https://elemoghenekaro.com).

## Features

- 📝 Markdown blog posts with YAML frontmatter
- 🔄 External post integration (Medium, etc.)
- 🌓 Dark/Light theme with system preference
- 📱 Responsive layout for all devices
- 🚀 Zero-dependency core
- 🔧 Built-in development server
- 📦 Automated build process
- 🎨 Customizable color palette

## Quick Start

1. Fork this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development:
   ```bash
   npm start
   ```

4. Create a post:
   ```bash
   # New local post
   ./post-utils.sh add '{"title":"My Post","date":"YYYY-MM-DD","excerpt":"Brief description"}'
   
   # External post
   ./post-utils.sh add '{"title":"External Post","date":"YYYY-MM-DD","excerpt":"Brief description","externalUrl":"https://example.com","source":"Source Name"}'
   ```

5. Build and deploy:
   ```bash
   npm run build:all
   ```

## Documentation

See the `docs/` directory for detailed guides on:
- Development workflow
- Project structure
- Design system
- Deployment steps

## Customization

1. Update `CNAME` with your domain
2. Modify colors in `assets/css/palette.css`
3. Replace logo in `assets/images/`
4. Edit site info in `index.html`

## License

MIT - Feel free to use this template for your personal site! 