/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#369FE0',
        'main-second': '#2a24e5',
        'main-grey': '#f8f8f8',
        'hover': '#e5e5e5',
      }
    },
  },
  plugins: [],
}

