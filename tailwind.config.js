/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#69F753',    // bright green
        secondary: '#616161',  // gray
        dark: '#000104',      // almost black
        light: '#FFFFFF',     // white
      }
    },
  },
  plugins: [],
} 