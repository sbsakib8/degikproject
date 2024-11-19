/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'primaryColor': '#5F62E2',
        'btnColor':'#E7E7FB',
        'boxColor':'#F7F7FA',
        'secondaryColor':'#2AB691'
      },
    },
  },
  plugins: [],
}

