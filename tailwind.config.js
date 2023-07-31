const colors = require("tailwindcss/colors");

module.exports = {
  content: ["*.html"],
  theme: {
    colors: {
      // You may customize your own custom color here
      primary: "linear-gradient(180deg, #21A2DC 0%, #B221E3 100%)",
      secondary: "#384348",
      dark: "#161616",
      "dark-gray": "#1A1A1A",
      ...colors,
    },
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      // if add custom style save here
    },
  },
  plugins: [],
};
