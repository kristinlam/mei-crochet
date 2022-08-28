/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    colors: {
      red: '#F8483F', // used
      yellow: '#FCC575',
      blue: '#C4DFEF', // used
      pink: '#FBB7BA',
      orange: '#F9B18B', // used
      'orange-dark': '#F47A3B', // used
      beige: '#F6E4C3', // used
      green: '#ADB05A', // used
      'green-light': '#CAD62F', // buttons
      'green-medium': '#C2E19B',
      purple: '#D3C2F8',
      black: '#232323',

      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      white: '#fff',
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
