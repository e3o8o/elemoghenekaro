# Preterag Website

The official website for Preterag, built with modern web technologies and hosted on GitHub Pages.

## 🌐 Live Site

Visit us at [preterag.github.io/preterag_website](https://preterag.github.io/preterag_website)

## 🏗️ Project Structure

```
preterag_website/
├── about/           # About section
├── assets/         # Static assets (CSS, JS, images)
├── building/       # Building section
├── contributing/   # Contributing section
├── docs/          # Documentation
└── writing/        # Blog posts and articles
    ├── _posts/     # Markdown source files for posts
    ├── posts.json  # Post metadata
    └── *.html      # Generated post pages
```

## 🚀 Development

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/preterag/preterag_website.git
   cd preterag_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   python -m http.server
   ```

4. Visit `http://localhost:8000` in your browser

### Branch Structure

- `main` - Production branch, deployed to GitHub Pages
- `development` - Development branch for ongoing work

### Development Workflow

1. Create a feature branch from `development`:
   ```bash
   git checkout development
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "feat: Add your feature"
   ```

3. Push to GitHub and create a PR to `development`:
   ```bash
   git push origin feature/your-feature-name
   ```

4. After review and testing, merge to `development`
5. When ready for production, merge `development` into `main`

## 📝 Content Management

### Blog Posts

1. Add Markdown files to `writing/_posts/`
2. Update `writing/posts.json` with metadata
3. Run the build script:
   ```bash
   node writing/build.js
   ```

### Path Handling

- All paths use dynamic base href for GitHub Pages compatibility
- Assets are referenced relative to the base href
- Navigation uses relative paths with trailing slashes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch from `development`
3. Follow the development workflow above
4. Submit a Pull Request

## 📄 License

© 2025 Preterag OÜ. All rights reserved. 