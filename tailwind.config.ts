import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "659": "659px",
      },
      width: {
        "456": "456px",
        "300": "300px",
      },
      fontFamily: {
        Alegreya: "Alegreya, serif",
      },
      fontSize: {
        "42": "42px",
      },
    },
  },
  plugins: [],
};
export default config;
