import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        h: ["var(--font-russo-one)", ...fontFamily.sans],
        p: ["var(--font-montserrat-alternates)", ...fontFamily.sans],
      },
      colors: {
        accent: {
          main: "hsl(140, 75%, 50%)",
          hover: "hsl(140, 85%, 60%)",
          press: "hsl(140, 75%, 40%)",
        },
        primary: {
          main: "hsl(215, 30%, 40%)",
          hover: "hsl(215, 40%, 50%)",
          press: "hsl(215, 30%, 30%)",
        },
        secondary: {
          main: "hsl(215, 20%, 30%)",
          hover: "hsl(215, 30%, 40%)",
          press: "hsl(215, 20%, 20%)",
        },
        gradient: {
          1: "hsl(215, 40%, 50%)",
          2: "hsl(215, 60%, 65%)",
        },
        warning: {
          main: "hsl(10, 75%, 45%)",
          hover: "hsl(10, 85%, 55%)",
          press: "hsl(10, 75%, 35%)",
        },

        light: "hsl(0, 0%, 100%)",
        dark: "hsl(0, 0%, 12%)",
        err: "hsl(10, 75%, 45%)",
      },
      borderRadius: {
        input: "1.38rem",
      },
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
      },
    },
  },
  plugins: [
    require("tailwindcss-react-aria-components"),
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
} satisfies Config;
