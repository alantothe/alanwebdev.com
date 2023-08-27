/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aboreto: "'Aboreto'",
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        lightyellow: "rgb(255,255,231)",
        coolgrey: "rgb(48,48,48)",
      },
      keyframes: {
        arrow: {
          "0%": { opacity: 0 },
          "40%": { opacity: 1 },
          "80%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
      },
      animationDelay: {
        500: "500ms",
        1000: "1000ms",
        1500: "1500ms",
      },
    },
  },
  plugins: [],
};
