import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hoper: ['Hoper Begin', 'sans-serif'],
        futura: ['Futura Std', 'sans-serif'],
      },
      colors: {
        transparent: "transparent",
        white: "#FCFBFA",
        black: "#083C35",
        orange: "#EA5C1F",
      },
    },
  },
  plugins: [],
} satisfies Config;
