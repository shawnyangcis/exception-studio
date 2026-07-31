import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
        hand: ["Caveat", "Kalam", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: {
          50: "#fbf8f3",
          100: "#f3ede1",
          200: "#e7dcc4",
          300: "#c9b993",
          500: "#8a7a55",
          700: "#5a4d31",
          900: "#2c2516"
        },
        paper: "#faf6ee",
        accent: {
          pink: "#f0a6b1",
          moss: "#7c8f5d",
          sky: "#a3c4dc"
        }
      }
    }
  },
  plugins: []
};

export default config;
