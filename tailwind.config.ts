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
        hoper: ['var(--font-hoper)', 'sans-serif'],
        'satoshi-regular': ['var(--font-satoshi-regular)', 'sans-serif'],
        'satoshi-medium': ['var(--font-satoshi-medium)', 'sans-serif'],
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
