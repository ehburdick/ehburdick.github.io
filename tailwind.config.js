/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors:{
      black: "#191A19",
      orange: "#f76e19",
      cyan: "#05a1a1",
      grey: "F3F3F3",
      "grey-light": "FAFAFA",
      "cyan-light": "#89f5f5",
      white: "#fff",
    },
    fontFamily:{
      sans: ["Georgia", "sans-serif"],
      serif: ["Merriweather", "serif"],
      display: ["Oswald"],
    },
    extend: {},
  },
  plugins: [],
}
