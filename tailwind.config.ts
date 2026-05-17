import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          500: "#3b5bdb",
          700: "#2f4ac8",
          900: "#1a2452"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
