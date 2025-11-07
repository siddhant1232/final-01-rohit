/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#282C33',
        'gray-text': '#ABB2BF',
        primary: '#C778DD',
        accent: '#FFD700',
        white: '#FFFFFF',
      },
      fontFamily: {
        'fira-code': ['"Fira Code"', 'monospace'],
      }
    },
  },
  plugins: [],
}
