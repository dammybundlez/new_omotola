/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./darkmode.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        shantell: ['Shantell Sans', 'cursive'],
      },
    },
  },
  plugins: [],
}

