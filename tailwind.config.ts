import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-estedad)", ...fontFamily.sans],
      },
      colors: {
        background: "var(--background-app)",
        backgroundTitle: "var(--background-title)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        white: "var(--color-white)",
        black: "var(--color-black)",
        textColor: "var(--color-texts)",
        quantityNumber: "var(--color-quantity)",
        red: "var(--color-red)",
        border: "var(--color-border)",
        titleH2: "var(--color-h2)",
        btn: "var(--color-btn)",
        success: "var(--color-success)",
      },
    },
  },
  plugins: [],
} satisfies Config;
