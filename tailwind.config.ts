import { transform } from "next/dist/build/swc/generated-native";
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
        'movement': {
          '0%, 100%': { transform: 'scale(1)'},
          '50%': { transform: 'scale(1.07)' } // specify units like 'px' or '%'
        },
        jumpAndRotate: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-70px) rotate(180deg) scale(0.75)' },
          '50%': { transform: 'translateY(0) rotate(180deg) scale(0.5)' },
          '75%': { transform: 'translateY(-70px) rotate(360deg) scale(0.75)' },
          '100%': { transform: 'translateY(0) rotate(360deg)' } 
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'throb': 'movement 3.5s ease-in-out infinite',
        'jumpAndRotate': 'jumpAndRotate 1s ease-in',
      },
      colors: {
        lightGray: '#E5E5E5', 
        aquaBlue: '#0BB3BA',    
        superNovaYellow: '#FFC700',  
        electricBlue: '#7DF9FF', 
        galaxyBlue: '#0A0A1A',
        crimsonRed: "#DC143C",
        neonPurple: "#B287F0",
        orangeYellow: "#ff8f00"
      },
    },
  },
  plugins: [
    animate,
    scrollbar
  ],
} satisfies Config

export default config