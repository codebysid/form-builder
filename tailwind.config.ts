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
        background: "var(--background)",
        foreground: "var(--foreground)",
        filled: "var(--filled)",
        hover: "var(--hover)",
        error: "var(--error)",
        bgColor: "var(--bg-color)",
        textColor: "var(--text-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
