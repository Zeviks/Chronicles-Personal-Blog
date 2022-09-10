/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          primary: "#00F6DE",
          secondary: "#0ABE72",
          briGreen: "#1DDFAC",
          fontColor: "#161329",
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
    },
  },
  plugins: [],
}
