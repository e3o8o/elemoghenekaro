# Preterag Site

The official website for Preterag, showcasing our journey in building [Surrealine](https://surrealine.com).

## Overview

A minimalist landing page featuring:
- Responsive design
- Dark/Light mode toggle
- Social media links
- Modern UI with gradient backgrounds

## Development

The site is built with:
- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome icons
- Gothic A1 font family

## Local Development

To run the site locally:

1. Clone the repository:
```bash
git clone https://github.com/preterag/preterag-site.git
cd preterag-site
```

2. Start a local server (using Python):
```bash
python3 -m http.server 8000
```

3. Visit `http://localhost:8000` in your browser

## Contact

- Website: [preterag.com](https://preterag.com)
- Email: [hello@preterag.com](mailto:hello@preterag.com)
- X (Twitter): [@preterag](https://x.com/preterag)
- Instagram: [@preterag](https://instagram.com/preterag)
- GitHub: [@preterag](https://github.com/preterag)
- Blog: [mirror.xyz/preterag.eth](https://mirror.xyz/preterag.eth)

## Styling Guide

### Color System
The website uses a Caribbean-themed color palette defined in `assets/css/palette.css`:
- Base colors are managed through CSS variables
- Background uses a radial gradient from midnight green to teal
- HTML background has a semi-transparent spring green overlay
- All navigation elements maintain transparency

### Adding New Pages
When creating new pages:
1. Import the core stylesheets:
   ```html
   <link rel="stylesheet" href="/assets/css/palette.css">
   <link rel="stylesheet" href="/assets/css/styles.css">
   ```
2. Use the standard container structure:
   ```html
   <nav class="nav-breadcrumb">
     <!-- Navigation content -->
   </nav>
   <div class="container">
     <!-- Page content -->
   </div>
   ``` 