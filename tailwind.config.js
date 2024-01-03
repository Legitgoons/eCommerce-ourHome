/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        500: '500px',
      },
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
        12: '0.75rem',
        16: '1rem',
        20: '1.25rem',
        24: '1.5rem',
        28: '1.75rem',
        32: '2rem',
        40: '2.5rem',
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
