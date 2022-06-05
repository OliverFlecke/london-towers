module.exports = {
  content: ["{src,pages}/**/*.{html,tsx}"],
  darkMode: "media",
  variants: {
    extend: {
      backgroundColor: ["odd", "last", "first"],
    },
  },
  plugins: [],
};
