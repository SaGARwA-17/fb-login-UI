/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'blue-100': '#1778F2',
        'green-100': '#42B72A',
      },
      padding: {
        38: '9.5rem',
      },
      spacing: {
        26: '6.5rem',
      },
      fontSize: {
        '2Axl': ['1.7rem', { lineHeight: '2rem' }],

      }
    },
  },
  plugins: [],
  
}
