/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Luxury premium light palette
        'lux-bg': '#FFFFFF',          // Pristine white background
        'lux-bg-secondary': '#F9F8F6',// Sophisticated off-white / soft plaster
        'lux-card': '#FFFFFF',        // Solid white cards
        'lux-accent-gold': '#F4B333', // Exquisite golden-amber gold
        'lux-accent-tan': '#C59B4B',  // Elegant warm copper/bronze gold
        'lux-accent-light': '#121212',// Dark charcoal for high-contrast highlights
        'lux-text-primary': '#121212',// Rich charcoal for primary headers and text
        'lux-text-secondary': '#4A4A4A',// Highly legible dark gray for secondary text
        'lux-text-muted': '#71717A',  // Slate gray for muted helper text
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        body: ['Inter', 'Manrope', 'sans-serif'],
        logo: ['"Cinzel Decorative"', 'serif'],
      },
      spacing: {
        section: '100px',
      },
      borderRadius: {
        '4xl': '28px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
