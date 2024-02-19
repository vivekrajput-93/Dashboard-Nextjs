import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom': '#151C39',
        'logo' : '#2C3A58',
        'hero' : '#bdd8f0',
      },
    },
  },
  plugins: [],
};
export default config;
