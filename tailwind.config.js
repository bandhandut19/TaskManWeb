/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      exo:['Anta', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}