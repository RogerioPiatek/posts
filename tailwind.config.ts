/** @type {import('tailwindcss').Config} */
import { colors, fonts } from "./src/tokens/index";

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: { headerShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.16)" },
    },
    fontWeight: fonts.fontWeight,
    fontSize: fonts.fontSize,
    lineHeight: fonts.lineHeights,
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
      extend: {
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
    colors: { ...colors, current: "currentColor" },
  },
};
