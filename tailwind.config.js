/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Primary: '#545F71',
        Secondary: '#9BA5B7',
        Tertiary: '#EEF1F4',
        Skyblue: '#BADEFF',
        Darkblue: '#186EBF',
        Orange: '#FF844F',
        Red: '#FF5361',
      },
      fontFamily: {
        suit: ['SUIT', 'sans-serif'],
      },
      fontSize: {
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
        40: '40px',
        48: '48px',
      },
      lineHeight: {
        120: '120%',
      },
      fontWeight: {
        semibold: '600',
        heavy: '900',
      },
    },
  },
  plugins: [],
};
