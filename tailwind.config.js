/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    colors: {
      black: '#232323',
      white: '#FFFFFF',
      beige: '#F8F3DA',
      red: '#93032E',
      orange: '#E95B0B',
      yellow: '#F4DE91',
      green: '#575726',
      blue: '#202C59',
      brown: '#CE6f33',
      purple: '#6153CC',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Corben', 'serif'],
    },
    extend: {
      dropShadow: {
        'orange-sm': '5px 5px rgba(230, 90, 10,1)',
        'orange-md': '8px 8px rgba(230, 90, 10,1)',
        'orange-lg': '11px 11px rgba(230,90,10,1)',
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 20s linear infinite',
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
