/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    colors: {
      black: '#232323',
      white: '#FFFFFF',
      beige: {
        100: '#F8F3DA',
        200: '#F6E4C3',
      },
      yellow: {
        100: '#fef1c3',
        200: '#F4DE91',
      },
      orange: {
        100: '#FCA824',
        200: '#F47A3B',
        300: '#E95B0B',
      },
      green: {
        100: '#C3B000',
        200: '#ADB05A',
        300: '#575726', // new
      },
      brown: {
        100: '#CE6f33', // new
      },
      pink: {
        100: '#F2789B',
        200: '#E06E84', // new
      },
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Corben', 'serif'],
    },
    extend: {
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
