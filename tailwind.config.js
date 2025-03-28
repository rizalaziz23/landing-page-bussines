/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        brand : '#F15757',
        light : '#F6F6F9',
        blue : '#E3F5FF',
        yellow : '#F88E12',
        dark : '#1C1C1C',
      }
    },
  },
  plugins: [],
}

