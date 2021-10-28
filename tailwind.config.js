module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], //purge: []
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
