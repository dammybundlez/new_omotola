/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./darkmode.html", "./films.html", "./legacy.html", "./news.html", "./about.html" , "./test.html",
     "seconddesign.html" , "thirddesign.html" , "contact.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        shantell: ['Shantell Sans', 'cursive'],
        athelas: ['"Athelas"', 'serif'],
        inter: ['"inter"' , 'serif'],
        archivo: ['"archivo"' , "serif"],
        anton : [ '"anton"' , 'serif']
      },
      keyframes: {
        softBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        softBounce: 'softBounce 2s ease-in-out infinite',
        softBounceDelay: 'softBounce 2s ease-in-out infinite 0.3s',
      },
    },
  },
  plugins: [],
}

