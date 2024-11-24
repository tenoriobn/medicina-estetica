/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-cherry-almond': 'linear-gradient(180deg, rgba(218,179,169,1) 66%, rgba(243,226,221,1) 86%)',
        'gradient-blush-fade': 'linear-gradient(180deg, rgba(227,196,188,1) 70%, rgba(227,196,188,0) 96%)',
        'gradient-fade-blush': 'linear-gradient(0deg, rgba(227,196,188,1) 60%, rgba(227,196,188,0) 96%)',
        'blushSandGradient': 'linear-gradient(180deg, rgba(218,179,169,1) 47%, rgba(243,226,221,1) 79%, rgba(218,179,169,1) 98%)',
        'gradient-cherry-brown': 'linear-gradient(90deg, rgba(162,79,52,1) 0%, rgba(182,111,88,1) 100%)',
        'gradient-chocolate-caramel': 'linear-gradient(90deg, rgba(96,45,28,1) 0%, rgba(153,74,48,1) 100%)',
        'gradient-white': 'linear-gradient(180deg, rgba(255,255,255,1) 40%, rgba(255,255,255,0.14609593837535018) 70%)',
        '': 'linear-gradient(180deg, rgba(227,196,188,1) 47%, rgba(227,196,188,0) 96%)'
      },
      colors: {
        black: '#000000',
        sandyBlush: '#DAB3A9',
        blush: '#F3E2DD',
        blushBeige: '#E3C4BC',
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
        xl: "1200px",
        xxl: "1442px",
      },
    },
  }
}

