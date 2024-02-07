/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      width: {
        '200': '200px',
        '384': '384px'
      },
      height: {
        '100': '100px',
        '200': '200px',
        '234': '234px'
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(191,236,238,0.5) 0%, rgba(0,110,122,0.5) 50%, rgba(191,236,238,1) 100%)'
      },
    },
  },
  plugins: [],
}

