import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#020617",
          deep: "#0B1120",
          black: "#000000",
        },
        gold: {
          DEFAULT: "#D4AF37",
          luminous: "#FBBF24",
          bright: "#FFD700",
        },
        slate: {
          silver: "#94A3B8",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "gold-aura": "0 0 25px rgba(212, 175, 55, 0.4)",
        "gold-aura-strong": "0 0 40px rgba(212, 175, 55, 0.5)",
        "gold-glow": "0 10px 10px -5px rgba(212, 175, 55, 0.2)",
      },
      backgroundImage: {
        "midnight-radial": "radial-gradient(ellipse at center, #0B1120 0%, #000000 70%)",
        "hero-gradient": "linear-gradient(180deg, #000000 0%, #020617 40%, #0B1120 100%)",
      },
      animation: {
        "gold-pulse": "gold-pulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        "gold-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" },
          "50%": { boxShadow: "0 0 35px rgba(212, 175, 55, 0.5)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
