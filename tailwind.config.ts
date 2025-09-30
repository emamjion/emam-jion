import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-bebas)",
      secondary: "var(--font-inter)",
    },
    extend: {
      colors: {
        // primary: "#10151f",
        primary: "#10151f",
        secondary: "#475467",
        accent: {
        //   DEFAULT: "#0D1164",
          DEFAULT: "#10B981",
        //   hover: "#1A2A80",
          hover: "#10B199",
        },
      },
      boxShadow: {
        custom: "0px 14px 54px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
