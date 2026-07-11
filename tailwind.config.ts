import type { Config } from "tailwindcss";

/**
 * Tailwind configuration.
 *
 * Colours, fonts and the custom keyframe animations all map 1:1 to the
 * original design so the UI stays faithful.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1320px",
      },
    },
    extend: {
      colors: {
        body: "#131313",
        lighter: "#1F1F1F",
        ink: "#070707",
        primary: "#C9F31D",
        heading: "#FFFFFF",
        base: "rgba(255, 255, 255, 0.65)",
        line: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        body: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-dm-sans)", "sans-serif"],
      },
      fontSize: {
        h1: ["65px", { lineHeight: "1.1" }],
        h2: ["45px", { lineHeight: "1.2" }],
        h3: ["30px", { lineHeight: "1.3" }],
        h4: ["24px", { lineHeight: "1.1" }],
        h5: ["20px", { lineHeight: "1.4" }],
        h6: ["16px", { lineHeight: "1.4" }],
      },
      maxWidth: {
        "container-wide": "1650px",
        "container-narrow": "1230px",
      },
      borderRadius: {
        btn: "15px",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          from: { opacity: "0", transform: "translateY(-40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s both",
        fadeInDown: "fadeInDown 1s both",
        fadeInLeft: "fadeInLeft 1s both",
        fadeInRight: "fadeInRight 1s both",
        fadeIn: "fadeIn 1s both",
        "spin-slow": "spinSlow 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;