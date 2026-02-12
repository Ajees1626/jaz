/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jaz: {
          dark: "#00A3A0",
          DEFAULT: "#55BAB5",
          light: "#96D5D1",
        },
      },
    },
  },
  plugins: [],
};
