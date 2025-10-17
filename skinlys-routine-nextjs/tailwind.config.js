/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skinlysRose: "#FFECEA",
        skinlysOrange: "#C75A42",
        skinlysBrique: "#C04027",
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
};
