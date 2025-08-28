# Vybe Capital Website

A modern, responsive website for Vybe Capital - accelerating intelligence-driven innovation.

## 🚀 Quick Start

1. **View the website locally:**
   ```bash
   # Simply open index.html in your browser
   open index.html
   # or drag and drop index.html into any web browser
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   # Create a new repository on GitHub
   # Then push this code:
   git remote add origin https://github.com/yourusername/vybe-capital-site.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
   - Your site will be live at `https://yourusername.github.io/vybe-capital-site`

## 📁 Project Structure

```
vybe-capital-site/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript for interactions and form handling
└── README.md          # This file
```

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX** - Dark theme with gradients and smooth animations
- **Contact Form** - Integrated form with validation and email integration
- **Performance** - Optimized for fast loading and smooth scrolling
- **Accessibility** - Keyboard navigation and screen reader friendly
- **SEO Ready** - Proper meta tags and semantic HTML

## 🎨 Design Elements

- **Color Scheme**: Dark background (#1a1d29) with blue/teal gradients
- **Typography**: Inter font family for modern, clean look
- **Animations**: Smooth transitions and scroll-based animations
- **Icons**: Custom SVG icons for features section
- **Layout**: Flexbox and CSS Grid for responsive layouts

## 📧 Contact Form Setup

The contact form currently uses a mailto fallback. For production, integrate with:

### Option 1: Formspree (Recommended)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Netlify Forms
```html
<form name="contact" method="POST" data-netlify="true">
```

### Option 3: EmailJS
Add EmailJS integration in `script.js` for client-side email sending.

## 🛠️ Customization

### Update Content
- Edit text content directly in `index.html`
- Modify colors in `styles.css` CSS variables section
- Add/remove sections as needed

### Add Logo
- Replace the SVG logo in the header with your actual logo
- Update the favicon by adding `favicon.ico` to the root directory

### Styling Changes
- All styles are in `styles.css`
- Uses CSS custom properties for easy theme customization
- Mobile-first responsive design approach

## 🌐 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## 📱 Mobile Optimization

- Fully responsive design
- Touch-friendly buttons and forms
- Optimized typography scaling
- Fast mobile loading times

## 🔧 Development

For local development with live reload, you can use:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js live-server
npx live-server

# Using VS Code Live Server extension
# Right-click index.html > "Open with Live Server"
```

## 📈 Performance

- Lightweight: ~15KB total (HTML + CSS + JS)
- No external dependencies except Google Fonts
- Optimized images and SVG icons
- Minifiable for production

## 🚀 Deployment Options

1. **GitHub Pages** (Free)
2. **Netlify** (Free tier available)
3. **Vercel** (Free tier available)
4. **Firebase Hosting** (Free tier available)

## 📄 License

This project is created for Vybe Capital. All rights reserved.

---

**Built with ❤️ for the next generation of intelligence-driven applications**