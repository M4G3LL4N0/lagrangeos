import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "lagrange-cyan": "#30D5FF",
        "lagrange-violet": "#8B5CF6",
        "lagrange-yellow": "#FFD54A",
      },
    },
  },
};

export default config;
