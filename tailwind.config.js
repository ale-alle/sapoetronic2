/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#1a4d2e',
        'light-green': '#e8f5e9',
      },
    },
  },
  plugins: [],
}
