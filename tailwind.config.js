/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Work Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'green-color': '#6c9477',
        'btn-color': '#6c9477',
        'btn-color-hover': '#538b63',
        'background-color-app': '#2b2b2b',
        'background-color-components': '#3b3b3b',
        'text-color-main': '#ffffff',
        'text-color-sub': '#858584',
        'text-link-color': '#ffffff',
        'link-color-hover': '#6c9477',
        'link-color-active': '#6c9477',
        'black-30': 'rgba(0, 0, 0, 0.3)',
        'black-10': 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
