/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  fontFamily: {
    "mont" : ['Montserrat-Regular, ...detailTheme.fontFamily.mont'],
      "mont-bold" : ["Montserrat-Bold, ...detailTheme.fontFamily.mont-bold"],
  },
   
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
      "loginbutton" : "#5500C2",
      "orangeBG" : "#F4BA58",
      "greenBG" : "#00C285",
      "borderColor" : "#B9B4B4",
      "pinkBG" : "#DA85A0",
      "boxBG" : "#F9F9F9",
      "boxBorder" : "#D0D0D0",
      "tableBG" : "#FAFFFD",
      "grayFont" : "#495159",
      "boxGray" : "#FAFFFD",
      "resetText" : "#2B2929",
      "placeText" : "#5B5858",
      "eduGreen" : '#00C285',
      "textGray" : "#858585",
      "liveclass" : "#FAF5FE",
      "livetext" : "#626262",
      "buttonOrange" : "#FB773D",
      "blackGrad" : "#1A181D99",
      "livered" : "#C13232",
      "bodyShade" : "#E5E5E5",
    },

  },
  },
  plugins: [],
}