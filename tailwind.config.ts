import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: '#473BF0',
      secondary: 'rgba(71, 59, 240,0.08)',
      black: '#161C2D',
      green: '#68D585',
      red: '#F74D4D',
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        gilroy: ['var(--font-gilroy)'],
        rubik: ['var(--font-rubik)'],
      },
    },
  },
  plugins: [],
};
export default config;
