// primary, secondary and tertiary colors; as well as box shadows, screens and background image
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#141619",
        primary: "#0b0b0d",
        // secondary: "#aaa6c3",
        secondary: "#bbb9c7",
        tertiary: "#2c2e3a",
        // tertiary: "#35363d",
        "black-100": "#141619",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        // card: "0px 35px 120px -15px #211e35",
        card: "0px 35px 120px -15px #3b3a42",
      },
      screens: {
        xs: "450px",
      },
      // Background referenced in App.jsx 
      // Made changes to background color 
      backgroundImage: {
        // "hero-pattern": "url('/src/assets/herobg-gray.png')",
        "hero-pattern": "url('/src/assets/portfolio_bg.png')",
      },
    },
  },
  plugins: [],
};
