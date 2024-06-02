/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
     center: true,
     padding: '16px',
    },
    extend: {
      colors: {
        blackcurrant: '#2B0945',
        lavender: '#44285B',
      },
      screens: {
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}

