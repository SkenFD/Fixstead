import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        fixstead: {
          green: "#22c55e",
          lime: "#a3e635",
          dark: "#07130d",
          panel: "#0d1d14"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 197, 94, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
