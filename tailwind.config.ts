import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        xGreen: "rgba(var(--xGreen))",
        xDarkGreen: "rgba(var(--xDarkGreen))",
        xGray: "rgba(var(--xGray))",
        xDarkGray: "rgba(var(--xDarkGray))",
        xDisable: "rgba(var(--xDisable))",
      },
    },
  },
  plugins: [],
} satisfies Config;
