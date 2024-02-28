/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        UnifrakturCook: ["UnifrakturCook", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}