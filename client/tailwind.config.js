/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation : {
        'flash' : 'flash 5s ease-out both'
      },
      keyframes : {
        flash : {
          '0%' : { transform : 'translateX(100%)' },
          '5%' : { transform : 'translateX(-5%)' },
          '10%' : { transform : 'translateX(0)' },
          '95%' : { opacity : 1 },
          '100%' : { opacity : 0 },
        }
      }
    },
  },
  plugins: [],
}