module.exports = {
  purge: ["./src/**/*.vue", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand-blue": "#1992d4"
      },
      spacing: {
        68: "17rem",
        "2/3": "67%",
        "5/6": "83%"
      },
      screens: {
        xs: "430px"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
