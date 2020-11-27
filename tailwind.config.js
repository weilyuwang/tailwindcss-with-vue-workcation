module.exports = {
  purge: ["./src/**/*.vue", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand-blue": "#1992d4"
      },
      spacing: {
        68: "17rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
