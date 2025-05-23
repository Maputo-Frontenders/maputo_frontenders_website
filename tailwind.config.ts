import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-teal-purple": "linear-gradient(90deg, #16F8B6, #8244FF)",
        "gradient-cyan-pink": "linear-gradient(90deg, #1FCFF1, #FF5FCC)",
        "gradient-teal-cyan": "linear-gradient(90deg, #16F8B6, #1FCFF1)",
        "gradient-orange-purple": "linear-gradient(90deg, #FF9F24, #8244FF)",
        "gradient-orange-pink": "linear-gradient(90deg, #FF9F24, #FF5FCC)",
        "gradient-cyan-purple": "linear-gradient(90deg, #1FCFF1, #8244FF)",
        "gradient-white-dark": "linear-gradient(90deg, #2A2A2A, #9B9B9B)",
        "gradient-white-dark-2": "linear-gradient(90deg,#9B9B9B, #2A2A2A)",
        "gradient-dark-blue": "linear-gradient(90deg, #020612, #040D20)",
        "gradient-cyan-orange": "linear-gradient(90deg, #1FCFF1, #FF9F24)",
        "gradient-dark-least": "linear-gradient(45deg, #020612, #17253D)",
        "gradient-dark-least-180": "linear-gradient(180deg, #020612, #17253D)",
        "gradient-turquoise-lavender":
          "linear-gradient(90deg, #16F8B6, #A679FF)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        mf: {
          background: "#040D21",
          primary: "#201C39",
          secondary: "#4ED4C5",
          secondProposal: "#16F8B6",
          secondProposalHover: "#10e3a6",
          secondaryVariation: "#15F8B6",
          white: "#E4E5E7",
          least: "#17253D",
          blue: "#191737",
          cyan: "#1FCFF1",
          lightBlue: "#3bbfca",
          dark: "#030918",
          purple: "#8244FF",
          orange: "#FF9F24",
          teal: "#4ED4C5",
          black: "#030918",
          surfacePrimary: "#2C243B",
          darkBlue: "#17253D",
          turquoise: "#16F8B6",
          pink: "#FF5FCC",
          lavender: "#A679FF",
          darkGray: "#2A2A2A",
          input: "#12172A",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(215deg) translateX(-200px)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "meteor-effect": "meteor 5s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
