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
    // screens: {
    //   'xsss': {'min': '0px', 'max': '160px'},
    //   // => @media (min-width: 640px and max-width: 767px) { ... }

    //   'xss': {'min': '161px', 'max': '320px'},
    //   // => @media (min-width: 640px and max-width: 767px) { ... }

    //   'xs': {'min': '321px', 'max': '640px'},
    //   // => @media (min-width: 640px and max-width: 767px) { ... }

    //   'sm': {'min': '641px', 'max': '767px'},
    //   // => @media (min-width: 640px and max-width: 767px) { ... }

    //   'md': {'min': '768px', 'max': '1023px'},
    //   // => @media (min-width: 768px and max-width: 1023px) { ... }

    //   'lg': {'min': '1024px', 'max': '1279px'},
    //   // => @media (min-width: 1024px and max-width: 1279px) { ... }

    //   'xl': {'min': '1280px', 'max': '1535px'},
    //   // => @media (min-width: 1280px and max-width: 1535px) { ... }

    //   '2xl': {'min': '1536px'},

    // },
  },
  plugins: [],
}

