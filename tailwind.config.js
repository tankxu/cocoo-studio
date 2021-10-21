const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          'dark': '#202B40',
          'red': '#E95A52',
          'blue1': "#4183FF",
          'blue2': "#8EB5FF",
          'blue3': "#CBDDFF",
          'blue4': "#F1F7FF",
          'blue5': "#EDF4FF",
          'yellow1': "#F1C149",
          'yellow2': "#E8E6E0",
        },
        gradient: {
          'blue1': '#004FA8',
          'blue2': '#4183FF',
        }
      },
      backgroundImage: {
        'coding-logo-construct': "url('../images/coding-logo-construct.png')",
        'texture-section-bg1': "linear-gradient(94.35deg, #D0DCFF 3.99%, rgba(227, 234, 255, 0.842819) 56.52%, rgba(242, 246, 255, 0.721673) 97.01%)",
        'texture-section-bg2': "linear-gradient(267.77deg, rgba(255, 167, 142, 0.943236) 0.86%, #CBA6FF 30.71%, #C0CEFA 52.37%, #4273FB 98.12%);",
        'footer-bg': "url('../images/home-footer-bg.png')",
        'opensource-bg': "linear-gradient(180deg, #E4E8EB 0%, #DCE0E3 100%)",
        'opensource-img': "url('../images/opensource-img.png')",

      },
      backgroundSize: {
        '112%': '112%',
        '2xl': '96rem',
      },
      minWidth: {
        '88': '22rem',
      },
      maxWidth: {
        '60%': '60%',
      },
      spacing: {
        '60px': '60px',
        '3px': '3px',
        '18' : '4.5rem',
        '630px': '630px',
        '128': '32rem',
        '192px': '192px',
        '196px': '196px',
        '200%':'200%',
        '16%': '16%',
      },
      boxShadow: {
        'lightbutton': '2px 4px 2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
