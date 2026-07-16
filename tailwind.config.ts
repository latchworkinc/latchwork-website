import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#07090a",
          900: "#0c0f0e",
          800: "#121615",
          700: "#191f1d",
          600: "#232b28",
          500: "#2f3936",
          400: "#48534f",
          300: "#6b7873",
        },
        emerald: {
          950: "#03130d",
          900: "#052e1f",
          800: "#064e33",
          700: "#08693f",
          600: "#0c8752",
          500: "#12a866",
          400: "#2ecb85",
          300: "#5fe0a5",
          200: "#9df0c5",
        },
        ink: {
          100: "#f2f5f3",
          200: "#dde5e1",
          300: "#a9b7b1",
          400: "#7c8b85",
        },
        interview: {
          bg: "#05050A",
          card: "#0F0F1C",
          accent: "#6C63FF",
          "accent-light": "#8B84FF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "dotted-leader":
          "linear-gradient(to right, currentColor 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(18,168,102,0.2)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
        "interview-card": "0 8px 40px rgba(0,0,0,0.55)",
        "interview-glow": "0 0 40px rgba(108,99,255,0.25)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
