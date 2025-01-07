/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      }
    },
    screens: {
      sm: "768px",
      // => @media (min-width: 768px) { ... }
      md: "1024px",
      // => @media (min-width: 1024px) { ... }
      lg: "1200px",
      // => @media (min-width: 1440px) { ... }
      xl: "1920px"
      // => @media (min-width: 1920px) { ... }
    },
    fontWeight: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900"
    }
  },
  plugins: []
};
