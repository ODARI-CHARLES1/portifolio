/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1e40af', // Blue for engineering theme
        secondary: '#374151', // Gray
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode
}