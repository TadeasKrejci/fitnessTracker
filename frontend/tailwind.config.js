/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1400px", // Nastavte maximální šířku pro LG a XL obrazovky
          xl: "1600px",
        },
      },
    },
  },
  plugins: [],
};
