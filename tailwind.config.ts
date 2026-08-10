import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080c14",
        foreground: "#f8fafc",
        card: "rgba(15, 23, 42, 0.65)",
        border: "rgba(255, 255, 255, 0.08)",
        indigo: {
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          900: "#312e81",
          950: "#1e1b4b",
        },
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          900: "#4c1d95",
        },
        cyan: {
          300: "#67e8f9",
          400: "#38bdf8",
          500: "#06b6d4",
          900: "#164e63",
          950: "#083344",
        },
        emerald: {
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          900: "#064e3b",
          950: "#022c22",
        },
        amber: {
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
        },
        rose: {
          400: "#fb7185",
          500: "#f43f5e",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite",
        "spin-slow": "spin 14s linear infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 25px 2px rgba(99, 102, 241, 0.3)" },
          "50%": { boxShadow: "0 0 45px 10px rgba(139, 92, 246, 0.45)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
