/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        "caprasimo": `'Caprasimo', serif`,
        "marhey": `'Marhey', sans-serif;`,
        "bungee":`'Bungee', sans-serif;`,
       "Dm-sans":"'DM Sans', sans-serif;"
      },
      colors:{
        "s-green":`#1DB954`,
        "s-gray":`#5555`
      },
      backgroundColor:{
        "s-green":`#1DB954`,
        "s-bg":`#5555`,
        "s-bg2":`#121212`
      }
    },
  },
  plugins: [],
}

