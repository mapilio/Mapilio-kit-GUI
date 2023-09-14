const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0056F1",
        baseprimary: "#ECECEC",
        basesecondary: "#F9F9F9",
        secondary: "#C2C2C2",
        menuText: "#808080",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};