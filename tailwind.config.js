/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxs': '540px', // min-width
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['corporate'],
  },
}
