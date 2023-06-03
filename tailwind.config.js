/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050605",
        secondary: "#88B702",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        buttonDimBlack: "rgba(255, 255, 255, 0.1)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      // xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1150px",
      lg: "1400px",
      // xl: "1700px",
      // sm: "1000px",
      // md: "1500px",
      // lg: "1800px",
    },
  },
  plugins: [],
};