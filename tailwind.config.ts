import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main": "#201C39",
        "second": "#4ED4C5",
        "white-mf": "#E4E5E7",
        "least": "#17253D",
        "blue-mf": "#191737",
        "dark": "#121214",
        "second-variation": "#15F8B6",
        "purple-mf": "#15F8B6",
        "orange-mf": "#FF9F24",
        "pink-mf": "#FF5FCC"
      }
    },
  },
  plugins: [],
};
export default config;
