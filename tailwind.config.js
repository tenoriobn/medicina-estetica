/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-cherry-brown': 'linear-gradient(90deg, rgba(162,79,52,1) 0%, rgba(182,111,88,1) 100%)',
        'gradient-chocolate-caramel': 'linear-gradient(90deg, rgba(96,45,28,1) 0%, rgba(153,74,48,1) 100%)',
        'gradient-white': 'linear-gradient(180deg, rgba(255,255,255,1) 40%, rgba(255,255,255,0.14609593837535018) 70%)',
      },
      colors: {
        black: '#000000',
        sandyBlush: '#DAB3A9',
        gray: '#262626',
        deepRed: '#A24F34',
        brickRed: '#89371C',
        softTerra: '#c38877',
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
  plugins: [require('@tailwindcss/aspect-ratio')],
}

