import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cu_Blue: "#478EFF",
        cu_Light_Blue: "#6B9FFF",
        cu_Off_Sky: "#C7DBFF",
        cu_Low_Opacity: "#F2F7FF",
        cu_Black: "#1F1F1F",
        cu_Grey: "#636363",
        cu_Low_White: "#E6E6E6",
        cu_Low_Grey: "#707070"
      },
    },
  },
  plugins: [],
};
export default config;
