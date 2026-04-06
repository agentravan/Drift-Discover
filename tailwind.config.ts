import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0A0A0A",
          800: "#111111",
          700: "#1A1A1A",
        },
        primary: {
          500: "#6366f1", // Indigo
          600: "#4f46e5",
          700: "#4338ca",
        },
        accent: {
          500: "#a855f7", // Purple
          600: "#9333ea",
          700: "#7e22ce"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
      },
    },
  },
  plugins: [],
};
export default config;
