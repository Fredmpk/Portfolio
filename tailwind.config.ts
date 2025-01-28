import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /^xs:/,
    },
  ],
  theme: {
    extend: {
      colors: {
        backgroundwhite: "#FAFCF9",
        handyellow: "#FAF0DE",
        webbrightgreen: "#E4E6DC",
        transgreen: "#9FBAA9",
        green: "#6E8B79",
        footerdarkgreen: "#4D5F50",
        introorange: "#E4CC87",
        skillsorange: "#DEC39D",
        bluepull: "#273254",
        bluebright: "#475583",
        bluedark: "#10273D",
        bluewhite: "#89A3F6",
        bluegrey: "#546088",
      },
      fontFamily: {
        sans: ["Tinos", "serif"],
      },
      screens: {
        xxs: "430px",
        xs: "560px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      transitionDuration: {
        "5000": "5000ms",
        "10000": "10000ms",
      },
    },
  },
  plugins: [],
};
export default config;
