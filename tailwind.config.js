/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#417558',
          dark: '#2b5962',
        },
        accent: '#ffa300',
      },
      fontFamily: {
        brandon: ['Brandon', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
