 /** @type {import('tailwindcss').Config} */
 const withMT = require("@material-tailwind/react/utils/withMT");

 module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif'],
        play:['Play', 'sans-serif'],
        poppins:['Poppins', 'sans-serif'],
        nunito:['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
});

