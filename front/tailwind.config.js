/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'darkgreen': '#0C0E0C',
      'white': '#EAEBEA',
      'red': '#A72830',
    },
    screens: {
      'phone': {'min': '0px', 'max': '1024px'},
      'desktop': {'min': '1025px'},
    },
  },
  plugins: [],
}

