/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'hover' : '#1ed760',
        'banner' : '#c5f0c9',
      }
    },
  },
  plugins: [],
}