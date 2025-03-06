# Preterag Design System

## Core Principles

### 1. Visual Identity
- **Minimalist & Modern**: Clean interfaces with purposeful use of space
- **Research-Focused**: Design that emphasizes clarity and readability
- **Dynamic & Interactive**: Smooth transitions and responsive feedback

### 2. Brand Colors
```css
/* Primary Colors */
--caribbean-current: #003838;  /* Deep teal for dark surfaces */
--teal: #004B4B;              /* Mid-teal for gradients */
--midnight-green: #001A1A;     /* Darkest shade for backgrounds */
--spring-green: #00F5A3;       /* Accent color for highlights */

/* Functional Colors */
--bg-color: radial-gradient(...);  /* Gradient background */
--text-color: #ffffff;             /* Light text on dark */
--text-color-muted: rgba(255, 255, 255, 0.7);
--accent-color: var(--spring-green);
--accent-hover: #00E090;
--card-bg: rgba(0, 26, 26, 0.4);
```

### 3. Typography
```css
/* Font Family */
font-family: 'Gothic A1', sans-serif;

/* Font Sizes */
--font-size-xs: 14px;   /* Small labels, footnotes */
--font-size-sm: 16px;   /* Body text, navigation */
--font-size-md: 18px;   /* Enhanced body text */
--font-size-lg: 24px;   /* Subheadings */
--font-size-xl: 28px;   /* Section headers */
--font-size-2xl: 36px;  /* Page titles */
--font-size-3xl: 42px;  /* Hero text */

/* Font Weights */
- Light: 300      /* Main navigation, large text */
- Regular: 400    /* Body text, buttons */
- Medium: 500     /* Emphasis, headings */
```

### 4. Spacing System
```css
/* Spacing Scale */
--spacing-xs: 5px;    /* Minimal separation */
--spacing-sm: 10px;   /* Tight spacing */
--spacing-md: 20px;   /* Standard spacing */
--spacing-lg: 30px;   /* Section spacing */
--spacing-xl: 40px;   /* Large gaps */
--spacing-2xl: 60px;  /* Major sections */
```

### 5. Layout
```css
/* Container Widths */
--container-sm: 800px;   /* Content-focused pages */
--container-md: 1000px;  /* Standard pages */
--container-lg: 1200px;  /* Full-width layouts */

/* Border Radius */
--radius-sm: 4px;     /* Small elements */
--radius-md: 8px;     /* Buttons, cards */
--radius-lg: 12px;    /* Large containers */
--radius-full: 9999px /* Circular elements */
```

## Component Patterns

### 1. Navigation
- **Main Navigation**
  - Font size: 30px
  - Font weight: 300
  - Centered alignment
  - Vertical spacing: var(--spacing-lg)
  - Hover: opacity 0.8 + color change

- **Sub Navigation**
  - Font size: 20px
  - Color: var(--spring-green)
  - Negative margin top: -8px
  - Hover: Same as main but keeps accent color

### 2. Buttons & Interactive Elements
```css
/* Standard Button */
.button {
    padding: var(--spacing-sm) var(--spacing-md);
    background: var(--spring-green);
    color: var(--midnight-green);
    border-radius: var(--radius-md);
    transition: opacity 0.3s ease;
    font-weight: 400;
}

/* Theme Toggle */
.theme-toggle {
    width: 40px;
    height: 40px;
    background: transparent;
    color: var(--accent-color);
}
```

### 3. Cards & Containers
```css
.card {
    background: var(--card-bg);
    border-radius: var(--radius-lg);
    padding: var(--spacing-md);
    transition: opacity 0.3s ease;
}

.list-section {
    margin: var(--spacing-2xl) 0;
    max-width: 800px;
}
```

### 4. Lists & Content Blocks
```css
.list-item {
    padding: var(--spacing-md) 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.list-item h3 {
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: var(--spacing-xs);
}
```

## Animation Guidelines

### 1. Transitions
- **Standard Duration**: 0.3s
- **Easing**: ease or ease-out
- **Properties**: opacity, transform, color
- **Theme Change Flash**: 0.1s with 40% opacity

### 2. Hover States
- Opacity reduction to 0.8
- Subtle transform: translateY(-2px)
- Color shifts to accent color
- Smooth transition: 0.3s ease

## Responsive Design

### Desktop (> 768px)
- Full navigation
- Maximum container widths
- Larger spacing values
- Hover interactions

### Tablet (≤ 768px)
```css
.site-header {
    height: 50px;
    padding: 0.8rem 1.2rem;
}

.main-nav {
    max-width: 400px;
    gap: var(--spacing-md);
}
```

### Mobile (≤ 480px)
```css
.site-header {
    height: 45px;
    padding: 0.6rem 1rem;
}

.main-nav {
    max-width: 300px;
    gap: var(--spacing-sm);
}

.nav-item {
    font-size: 30px;
    text-align: center;
}
```

## Best Practices

### 1. Theme Compatibility
- Test all components in both light and dark themes
- Use CSS variables for theme-dependent values
- Ensure sufficient contrast in both modes

### 2. Accessibility
- Maintain WCAG 2.1 AA standards
- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation

### 3. Performance
- Optimize transitions for 60fps
- Use system fonts when possible
- Minimize DOM updates
- Lazy load where appropriate

### 4. Code Organization
- Follow BEM naming convention
- Group related CSS properties
- Use CSS custom properties
- Maintain modular structure

## Implementation Examples

### New Page Template
```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
    <!-- Standard Meta -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="/assets/css/palette.css">
    <link rel="stylesheet" href="/assets/css/base.css">
    <link rel="stylesheet" href="/assets/css/components.css">
    <link rel="stylesheet" href="/assets/css/layout.css">
    
    <!-- Page-specific CSS -->
    <link rel="stylesheet" href="/path/to/page.css">
</head>
<body>
    <header class="site-header">
        <!-- Standard Header -->
    </header>
    
    <main class="content">
        <!-- Page Content -->
    </main>
    
    <footer class="site-footer">
        <!-- Standard Footer -->
    </footer>
</body>
</html>
```

## Version Control

This design system is version controlled. Any updates should be:
1. Documented in this file
2. Reviewed by the team
3. Tested across all breakpoints
4. Committed with clear messages

## Updates & Maintenance

When updating this design system:
1. Document all changes
2. Update example code
3. Test across all pages
4. Notify team members
5. Update version number 