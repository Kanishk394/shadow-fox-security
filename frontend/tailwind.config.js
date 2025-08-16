/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fox-orange': '#FF6B35',
        'shadow-dark': '#1A1A1A',
        'security-blue': '#2563EB'
      }
    },
  },
  plugins: [],
}