import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // opt-in only; nothing auto-switches
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 2s ease-in-out infinite',
      },
      transitionDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        600: '600ms',
        700: '700ms',
        800: '800ms',
        900: '900ms',
      },
    }, // no themed colors mapped
  },
  plugins: [],
};
export default config;
