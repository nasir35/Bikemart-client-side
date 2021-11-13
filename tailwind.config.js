module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        'roboto' : ['Roboto', 'sans-serif'],
        'qsand' : ['Quicksand', 'sans-serif']
      },
      colors : {
        'stromboli' : '#315048',
        'green-custom' : '#1CAE4B',
        'coral' : '#FF7F47',
        'yellow' : '#ff0'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
