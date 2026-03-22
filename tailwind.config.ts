import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          light: "#FDFBF7",
          beige: "#F6EDD9",
          green: "#4A6E53",
          darkGreen: "#2E4733",
          brown: "#8E5F3B",
          darkBrown: "#3B2818",
        }
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
