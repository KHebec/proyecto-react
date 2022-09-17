/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      grayscale: {
        50: "80%",
      },
      colors: {
        spirits: "#004225",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Eczar", "serif"],
    },
  },
  plugins: [],
};
