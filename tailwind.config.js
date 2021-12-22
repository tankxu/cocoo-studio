const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "540px",
        "co-grid": "1366px",
      },
      colors: {
        brand: {
          dark: "#202B40",
          red: "#E95A52",
          blue1: "#4183FF",
          blue2: "#8EB5FF",
          blue3: "#CBDDFF",
          blue4: "#F1F7FF",
          blue5: "#EDF4FF",
          yellow1: "#F1C149",
          yellow2: "#E8E6E0",
          grey7: "#606C80",
        },
        gradient: {
          blue1: "#004FA8",
          blue2: "#4183FF",
        },
      },
      backgroundImage: {
        "coding-logo-construct": "url('../images/coding-logo-construct.png')",
        "texture-section-bg1":
          "linear-gradient(94.35deg, #D0DCFF 3.99%, rgba(227, 234, 255, 0.842819) 56.52%, rgba(242, 246, 255, 0.721673) 97.01%)",
        "texture-section-bg2":
          "linear-gradient(267.77deg, rgba(255, 167, 142, 0.943236) 0.86%, #CBA6FF 30.71%, #C0CEFA 52.37%, #4273FB 98.12%);",
        "footer-bg": "url('../images/home-footer-bg.png')",
        "opensource-bg": "linear-gradient(180deg, #E4E8EB 0%, #DCE0E3 100%)",
        "opensource-img": "url('../images/opensource-img.png')",
      },
      backgroundPosition: {
        "position-960px": "0 -960px",
      },
      backgroundSize: {
        "112%": "112%",
        "2xl": "96rem",
        "size-hero": "auto 960px",
      },
      minWidth: {
        88: "22rem",
      },
      maxWidth: {
        "60%": "60%",
        "co-grid": "1136px",
      },
      spacing: {
        "60px": "60px",
        "3px": "3px",
        18: "4.5rem",
        "630px": "630px",
        128: "32rem",
        "192px": "192px",
        "196px": "196px",
        "200%": "200%",
        "16%": "16%",
      },
      boxShadow: {
        lightbutton: "2px 4px 2px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        "fade-in-page": "fadeIn 1500ms ease-out",
        "fade-in-500ms": "fadeIn 500ms ease-out",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
