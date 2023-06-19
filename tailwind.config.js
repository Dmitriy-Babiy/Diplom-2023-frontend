/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'project-green-100': '#7D9E86',
                'project-green-200': '#558261',
                'project-green-300': '#538B63',
                'project-green-400': '#50815E',
                'project-red-100': '#9E7D7D',
                'project-red-200': '#825555',
                'project-red-300': '#8B5353',
                'project-red-400': '#815050',
                'input-border-color': '#2c2c2c',
                error: '#c36464',
                disabled: '#585858',
                'green-color': '#467A54',
                'background-color-app': '#141414',
                'background-color-components': '#1a1a1a',
                'text-color-main': '#ffffff',
                'text-color-sub': '#858584',
                'text-link-color': '#ffffff',
                'link-color-hover': '#558261',
                'link-color-active': '#558261',

                'black-90': 'rgba(0, 0, 0, 0.9)',
                'black-80': 'rgba(0, 0, 0, 0.8)',
                'black-70': 'rgba(0, 0, 0, 0.7)',
                'black-60': 'rgba(0, 0, 0, 0.6)',
                'black-50': 'rgba(0, 0, 0, 0.5)',
                'black-40': 'rgba(0, 0, 0, 0.4)',
                'black-30': 'rgba(0, 0, 0, 0.3)',
                'black-20': 'rgba(0, 0, 0, 0.2)',
                'black-10': 'rgba(0, 0, 0, 0.1)',

                'white-90': 'rgba(255, 255, 255, 0.9)',
                'white-80': 'rgba(255, 255, 255, 0.8)',
                'white-70': 'rgba(255, 255, 255, 0.7)',
                'white-60': 'rgba(255, 255, 255, 0.6)',
                'white-50': 'rgba(255, 255, 255, 0.5)',
                'white-40': 'rgba(255, 255, 255, 0.4)',
                'white-30': 'rgba(255, 255, 255, 0.3)',
                'white-20': 'rgba(255, 255, 255, 0.2)',
                'white-10': 'rgba(255, 255, 255, 0.1)',
            },
            keyframes: {
                opacity: {
                    '0% ': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
            animation: {
                opacity: 'opacity 0.3s forwards',
            },
        },
    },
    plugins: [require('tailwind-scrollbar')({ nocompatible: true }), react(), svgr()],
};
