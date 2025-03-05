# Deployment Guide

This document outlines the deployment process for the Preterag website.

## GitHub Pages Deployment

The Preterag website is deployed using GitHub Pages. The main branch is automatically deployed to the production site when changes are pushed.

### Deployment Process

1. Ensure all changes are pushed to the main branch
2. GitHub Actions will automatically build and deploy the site
3. The site is available at [https://preterag.com](https://preterag.com)

### Custom Domain Configuration

The site uses a custom domain configured with:

1. A `CNAME` file in the repository root containing the domain name
2. DNS configuration on the domain registrar pointing to GitHub Pages

### Troubleshooting Deployment

If issues occur during deployment:

1. Check the GitHub Actions tab for build errors
2. Verify that the `CNAME` file is still present in the repository
3. Check that GitHub Pages is enabled in the repository settings
4. Ensure the custom domain is properly configured

## Manual Deployment

In case a manual deployment is needed:

1. Clone the repository
2. Make necessary changes
3. Push changes to the main branch
4. GitHub Pages will automatically deploy the changes

## Content Updates

For content updates:

1. Edit the relevant HTML files
2. Update CSS as needed
3. Push changes to the main branch
4. Allow 5-10 minutes for changes to propagate

## Performance Considerations

- Optimize images before deployment
- Minify CSS and JavaScript if manually deploying
- Verify Core Web Vitals using Google PageSpeed Insights 