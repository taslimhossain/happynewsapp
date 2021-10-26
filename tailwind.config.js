module.exports = {
  purge: [], //purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)'
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "900px",
        xl: "900px",
        "2xl": "900px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
