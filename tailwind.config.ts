import type { Config } from "tailwindcss"

const plugin = require('tailwindcss/plugin');
const animate = require("tailwindcss-animate")
const scrollbar = require('tailwind-scrollbar')
const customScrollbar = require("./lib/plugins/scrollbar.js")


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        lightGray: '#E5E5E5', 
        aquaBlue: '#0BB3BA',    
        softYellow: '#FFF89A',  
        electricBlue: '#7DF9FF', 
        galaxyBlue: '#0A0A1A',
        crimsonRed: "#DC143C",
      },
    },
  },
  plugins: [
    animate,
    scrollbar
  ],
} satisfies Config

export default config