/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#26b294',
          dark: '#068f6b',
        },
      },
      fontFamily: {
        brandon: ['Brandon', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
