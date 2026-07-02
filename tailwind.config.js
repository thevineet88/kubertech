/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Manrope",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          DEFAULT: "#F26522",
          dark: "#e05a1a",
        },
        ink: "#0c0c0c",
        paper: "#FAFAFA",
      },
    },
  },
  plugins: [],
}

