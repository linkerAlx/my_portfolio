/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'background': "url('/images/backgr.jpg')",
        'background': "url('/images/background.jpg')",
        'background': "url('/images/download.jpg')",
      }
    },
  },
  plugins: [],
}