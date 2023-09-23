/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        100: "100px",
        110: "110px",
        120: "120px",
        130: "130px",
        140: "140px",
        150: "150px",
        160: "160px",
        170: "170px",
        180: "180px",
        190: "190px",
        200: "200px",
      },
      height: {
        100: "100px",
        110: "110px",
        120: "120px",
        130: "130px",
        140: "140px",
        150: "150px",
        160: "160px",
        170: "170px",
        180: "180px",
        190: "190px",
        200: "200px",
      },

      fontFamily: {
        aboreto: "'Aboreto'",
        josefin: ["Josefin Sans", "sans-serif"],
      },
      screens: {
        xs: "300px",
      },
      colors: {
        lightyellow: "rgb(255,255,231)",
        coolgrey: "rgb(48,48,48)",
        zinc: {
          100: "#EAEAEA", // lightest
          200: "#D0D0D0",
          300: "#B5B5B5",
          400: "#9B9B9B",
          500: "#808080", // mid-tone
          600: "#666666",
          700: "#4B4B4B",
          800: "#313131",
          900: "#171717", // darkest
        },
      },
    },
  },
  plugins: [],
});
