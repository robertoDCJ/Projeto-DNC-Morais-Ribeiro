import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: 'slide 5s ease-in-out infinite',
      },
      keyframes: {
        slide: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100% 0' },
        },
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(375px, 1fr))",
        "auto-fit1": "repeat(auto-fit, minmax(308px, 1fr))",
      },
      height: {
        "659": "659px",
        "620": "620px",
      },
      width: {
        "456": "456px",
        "250": "250px",
      },
      fontFamily: {
        Alegreya: "Alegreya, serif",
        Lato: "Lato, sans-serif",
      },
      fontSize: {
        "42": "42px",
      },
    },
  },
  plugins: [],
};
export default config;
