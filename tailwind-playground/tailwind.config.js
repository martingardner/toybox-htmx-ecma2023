/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      width: {
        '200': '200px'
      },
      height: {
        '200': '200px'
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(191,236,238,0.5) 0%, rgba(0,110,122,0.5) 50%, rgba(191,236,238,1) 100%)'
      }
    },
  },
  plugins: [],
}

