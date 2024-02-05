/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      // center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      width:{
        sm:"10px",
        xl:"10rem"
      }
    },
    colors:{
      white:"#fff",
      dark:"#0D050E",
      btn:"#E200FF",
      blue: "#38b6ff"
    },  
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize:{
      
      h1:"56px"
    } ,
      backgroundImage: {
      "about-bg": "url('/Group.svg')",
    },
  },
  darkMode: "class",
  plugins: [],
}

