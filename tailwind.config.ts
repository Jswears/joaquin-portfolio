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
        "custom-gradient":
          "linear-gradient(to bottom right, rgb(175, 174, 175), rgb(240, 240, 240))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ibmPlexMono: [
          "var(--font-ibm-plex-mono)",
          "IBM Plex Mono",
          "monospace",
        ],
      },
      colors: {
        "charcoal-gray": "#252525",
        "light-gray": "#f5f5f5",
      },
    },
  },
  plugins: [],
};
export default config;
