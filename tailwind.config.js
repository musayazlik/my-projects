/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        sm: '576px'
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
}
