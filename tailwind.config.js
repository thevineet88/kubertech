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
          DEFAULT: "#8B5CF6",
          dark: "#6B94CC",
          cyan: "#06B6D4",
        },
        ink: "#050506",
        paper: "#0A0A0B",
      },
    },
  },
  plugins: [],
}
