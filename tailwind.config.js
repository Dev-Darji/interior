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
        'lux-bg-secondary': '#F2F4F4',// Sophisticated off-white / soft light gray
        'lux-card': '#FFFFFF',        // Solid white cards
        'lux-accent-gold': '#555C61', // Premium modern titanium slate gray (distinctive gray highlight, highly legible)
        'lux-accent-gold-light': '#C8CCCB', // Premium silver-gray from logo background (for borders/frames/fills)
        'lux-accent-tan': '#0F1821',  // Rich dark navy/charcoal from logo center
        'lux-accent-light': '#121212',// Dark charcoal for high-contrast highlights
        'lux-text-primary': '#121212',// Rich charcoal for primary headers and text
        'lux-text-secondary': '#6C757D',// Elegant muted dark gray (for inactive links and descriptions)
        'lux-text-muted': '#868E96',  // Muted gray for helper text
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
