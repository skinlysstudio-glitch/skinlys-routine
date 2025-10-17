/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./app/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skinlys: {
          bg: "var(--skinlys-bg)",
          primary: "var(--skinlys-primary)",
          terracotta: "var(--skinlys-terracotta)",
          dark: "var(--skinlys-dark)"
        }
      },
      fontFamily: {
        display: ["ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto","Inter","sans-serif"],
        body: ["ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto","Inter","sans-serif"]
      }
    }
  },
  plugins: [],
};
