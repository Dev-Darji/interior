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
        // Luxury premium dark palette
        'lux-bg': '#121212',          // Deepest charcoal
        'lux-bg-secondary': '#1A1A1A',// Lighter charcoal
        'lux-card': '#242424',        // Card background
        'lux-accent-gold': '#F4B333', // Highly visible, bright premium golden-amber gold
        'lux-accent-tan': '#C59B4B',  // Vibrant copper gold/tan
        'lux-accent-light': '#F5F3EF',// Soft off-white for high-contrast highlights
        'lux-text-primary': '#F5F5F7',// Bright crisp text for maximum visibility
        'lux-text-secondary': '#CFCFCF',// High-readability secondary gray text
        'lux-text-muted': '#A3A3A3',  // Visible muted gray text
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
