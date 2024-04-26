/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#5E607A",
        secondary: "#C5C6CE",
        white: "#FFFDFA",
        title: "#00001A",
        titlesecondary: "#E9AA52",
        btn: "#F15D51",
      },
    },
  },
  plugins: [],
};
