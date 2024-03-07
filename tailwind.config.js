/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      caveat: ["Caveat", "sans-serif"],
    },
    extend: {
      screens: {
        md2: "850px", // Define new breakpoint at 1280px
      },
    },
  },
  plugins: [],
};
