/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    colors: {
      black: '#232323',
      white: '#FFFFFF',
      yellow: '#F4DE91',
      beige: '#F6E4C3',
      pink: {
        100: '#F3C9B2',
        200: '#FCB0B1',
        300: '#F2789B',
      },
      orange: {
        100: '#FCA824',
        200: '#F47A3B',
        300: '#E95B0B',
      },
      green: {
        100: '#C3B000',
        200: '#ADB05A',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
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
