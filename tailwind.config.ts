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
        coral: {
          DEFAULT: "#f37366",
          light: "#f89890",
          dark: "#d9564a",
        },
        teal: {
          DEFAULT: "#65c4cc",
          light: "#8dd5db",
          dark: "#4aabb3",
        },
        sand: {
          DEFAULT: "#ebd8bc",
          light: "#f5ede0",
          dark: "#d4be9e",
        },
        cream: "#faf6f0",
        warmDark: "#3d2c1e",
        warmGray: "#6b5c4e",
        warmLight: "#8a7b6d",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
