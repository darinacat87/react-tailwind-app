/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#74ebd5",
        secondary: "#acb6e5",
        buttonStart: "#ff6a00",
        buttonEnd: "#ee0979",
      },
    },
  },
  plugins: [],
};
