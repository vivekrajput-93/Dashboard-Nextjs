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
        'hero-back' : '#111729',
        'ring' : '#409bee',
        'people' : '#1c2a4e',
        'span' : '#F5F5F5',
        'chat' : '#1c2a4e',
        'phone' : '#2c3a58',
        'hand' : '#E6D78C',
        'patient' : '#1b2c4f',
        'semi' : '#366aa3',
        'one' : '#abeeea',
        'oneth' : '#f5e5e5',
        "ten" : '#e5f5e6',
        'eleven' : "#c9f3ec",
        "mod" : "#c1e2f4",
        
      },
    },
  },
  plugins: [],
};
export default config;
