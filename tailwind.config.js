/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        sandyBlush: '#DAB3A9',
        deepRed: '#A24F34',
        brickRed: '#89371C',
      },
      boxShadow: {
        brickRed: '0px 2px 20px 0px #89371C',
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
      },
      maxWidth: {
        1140: '1140px',
      },
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1442px",
      },
    },
  },
  plugins: [],
}

