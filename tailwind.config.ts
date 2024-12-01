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
        zoom: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '20%': { transform: 'scale(5)', opacity: '0' },
          '25%': { transform: 'scale(0)', opacity: '0' },
          '30%': { transform: 'scale(0)', opacity: '0.5' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'throb': 'movement 3.5s ease-in-out infinite',
        'zoom': 'zoom 3s ease-in-out',
      },
      colors: {
        lightGray: '#E5E5E5', 
        aquaBlue: '#0BB3BA',    
        superNovaYellow: '#FFC700',  
        electricBlue: '#7DF9FF', 
        galaxyBlue: '#0A0A1A',
        crimsonRed: "#DC143C",
        neonPurple: "#B287F0",
        orangeYellow: "#ff8f00",
        darkGalaxy: "#01010F",
      },
      fontFamily: {
        salvar: ['Salvar', 'sans-serif'],
        aquire: ['Aquire', 'sans-serif'],
        aquireBold: ['AquireBold', 'sans-serif'],
        leblanc: ['Leblanc', 'sans-serif'],
        trench: ['Trench', 'sans-serif'],
        clock : ['Digital7', 'sans-serif'],
        clockMono : ['Digital7Mono', 'sans-serif']
      },
    },
  },
  plugins: [
    animate,
    scrollbar
  ],
} satisfies Config

export default config