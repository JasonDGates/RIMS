/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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

