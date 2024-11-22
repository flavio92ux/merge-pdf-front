/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        white: '#ffffff',
        blue: {
          300: '#A4CAF8',
          500: '#177EF3',
          700: '#0259BB'
        },
        blueGray: {
          500: '#435265'
        },
        gray: {
          50: '#808080',
          100: '#E2ECF2',
          200: '#DEE5E9',
          300: '#D6D4D4'
        },
      },
      fontSize: {
        'small': '12px',
        'medium': '14px',
        'large': '16px'
      },
    },
  },
  plugins: [],
}

