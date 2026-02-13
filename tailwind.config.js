/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "768px",   /* Tablet: 768px+ */
      md: "1024px",  /* Laptop: 1024px+ */
      lg: "1280px",  /* Desktop: 1280px+ */
      xl: "1440px",  /* Large Desktop: 1440px+ */
    },
    extend: {
      colors: {
        jaz: {
          dark: "#00A3A0",
          DEFAULT: "#55BAB5",
          light: "#96D5D1",
        },
      },
      maxWidth: {
        container: "1320px",
        "container-narrow": "1200px",
      },
    },
  },
  plugins: [],
};
