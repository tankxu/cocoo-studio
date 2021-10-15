const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
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
      },
      backgroundSize: {
        '112%': '112%',
        '2xl': '96rem',
      },
      minWidth: {
        '88': '22rem'
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
