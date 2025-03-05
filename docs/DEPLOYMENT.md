# Deployment Guide

## Overview

The Preterag site is deployed as a static site on GitHub Pages with a custom domain (preterag.com).

## Deployment Steps

1. **Prepare for Deployment**
   ```bash
   # Ensure all files are committed
   git status
   git add .
   git commit -m "Your commit message"
   ```

2. **Deploy to GitHub Pages**
   ```bash
   # Push to main branch
   git push origin main
   ```

   GitHub Actions will automatically deploy the site.

## Domain Configuration

1. **DNS Settings**
   - Type: `A` Record
   - Name: `@`
   - Value: GitHub Pages IP addresses
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

2. **CNAME Record**
   - Type: `CNAME`
   - Name: `www`
   - Value: `preterag.github.io`

## SSL/HTTPS

HTTPS is automatically enabled through GitHub Pages with Let's Encrypt certificates.

## Post-Deployment Checks

1. **Verify Site Access**
   - Check https://preterag.com
   - Check https://www.preterag.com
   - Verify SSL certificate

2. **Test Functionality**
   - Navigation links
   - External links
   - Theme toggle
   - Mobile responsiveness

3. **Performance Check**
   - Run Lighthouse audit
   - Check page load times
   - Verify asset loading

## Troubleshooting

1. **404 Errors**
   - Verify file paths are correct
   - Check CNAME file exists
   - Ensure GitHub Pages is enabled

2. **SSL Issues**
   - Check DNS propagation
   - Verify CNAME configuration
   - Wait for Let's Encrypt renewal

3. **Asset Loading**
   - Check file paths use correct case
   - Verify assets are committed
   - Check browser console for errors 