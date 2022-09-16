/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
   
  extend: {
    boxShadow:{
      "love-shadow" : "0px 0px 8px 3px rgba(0, 0, 0, 0.1);"
    },
    colors: {
      "bodywhite" : "#FFFFFF",
      "color1" : "#FF9F69",
      "color2" : "#F387C8",
      "color3" : "#292D30",
      "color4" : "#522CBF",
      "color5" : "#666268" ,
      "buttoncolor" : "#F1F1F1",
      "bluebutton" : "#2F2F85",

    },

  },
  },
  plugins: [],
}