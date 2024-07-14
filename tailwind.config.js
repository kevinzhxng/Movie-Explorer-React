/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'input_blue': '#c5e4e9'
      }
    },
    fontFamily: {
      sans: ['Kanit']
    }
  },
  plugins: [],
}

