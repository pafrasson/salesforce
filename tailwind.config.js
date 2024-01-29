/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'trans-right': {
          '0%,100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(5px)' }
        },
        wiggle: {
          '100%, 0%': { transform: 'rotate(-0.5deg)' },
          '50%': { transform: 'rotate(0.5deg)' },
        }
      },
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(17,24,39)",
        myShadow2: "-4.1px -5px 0 0 rgb(17,24,39)",
      },
      animation: {
        'trans-right': 'trans-right 1.5s ease-in-out infinite',
        'wiggle': 'wiggle 1.5s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite'
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 8px, #1b1b1b 100px);'
      },
      fontFamily: {
        mono: ["var(--font-roboto)", ...fontFamily.mono],
      },
      fontSize: {
        '8xl': '4rem', // Ajuste o tamanho conforme necessário
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
};