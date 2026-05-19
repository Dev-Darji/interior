# Interior Designer Portfolio - Setup Guide

## Project Overview

This is a modern, premium, fully responsive Interior Designer portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React** 18.2+
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **React Router** - Page navigation
- **React Icons** - Icon library
- **Swiper** - Carousel/slider component

## Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── ProjectCard.jsx
│   ├── ServiceCard.jsx
│   ├── SectionTitle.jsx
│   └── ScrollToTop.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ProjectDetails.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── data/               # Dummy data
│   └── projects.js
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Key Features

✨ **Luxury Design** - Premium, minimal, elegant aesthetic
🎨 **Dark Mode** - Toggle between light and dark themes
📱 **Responsive** - Mobile, tablet, and desktop optimized
✅ **Smooth Animations** - Framer Motion scroll animations
🖼️ **Project Gallery** - Showcase interior projects
💼 **Service Pages** - Detailed service offerings
📋 **Contact Form** - Get in touch functionality
🎠 **Testimonial Slider** - Client reviews with Swiper

## Customization

### Replace Dummy Content

All dummy content can be easily replaced:

1. **Images** - Replace Unsplash image URLs with your own in:
   - `src/data/projects.js` - Project images
   - Components - Background images

2. **Text Content** - Update all dummy text in:
   - `src/pages/Home.jsx`
   - `src/pages/About.jsx`
   - `src/data/projects.js`

3. **Colors** - Modify Tailwind theme in:
   - `tailwind.config.js` - Update color scheme

4. **Contact Information** - Update in:
   - `src/pages/Contact.jsx`

## Pages

- **Home** - Landing page with featured projects, services, and testimonials
- **Projects** - Full project gallery with category filters
- **Project Details** - Detailed project information with before/after
- **Services** - All services offered with descriptions
- **About** - Studio information, team, and values
- **Contact** - Contact form and location information

## Forms

The contact form is set up but needs backend integration. Options:

1. **EmailJS** - Email service integration
2. **Formspree** - Form backend service
3. **Custom Backend** - Your own API

Update the form submission handler in `src/pages/Contact.jsx`

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Deploy to GitHub Pages

Update `vite.config.js`:
```javascript
export default {
  base: '/your-repo-name/',
  // ... other config
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Images are loaded from Unsplash (CDN)
- Lazy loading is implemented for images
- Code splitting is handled by Vite
- Smooth scroll behavior implemented

## SEO

- Semantic HTML structure
- Meta tags configured in `index.html`
- Proper heading hierarchy
- Alt text on all images

## License

This project is ready for client use.

## Support

For questions or modifications, refer to the component files and data files which are well-commented for customization.
