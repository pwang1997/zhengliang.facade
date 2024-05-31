import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        "dark" : 'rgb(15 23 42)',
        "dark-hover" : 'rgb(30 41 59)',
        "white" : 'rgb(241 245 249)',
        'white-hover' : 'rgb(226 232 240)',

        "dark-primary" : 'rgb(15 23 42)',
        "dark-second" : 'rgb(30 41 59)',
        "bright-primary" : 'rgb(241 245 249)',
        'bright-second' : 'rgb(226 232 240)'
      },
      keyframes: {
        fadeIn: {
          '0%': {
             opacity: '0'
           },
          '100%': { 
            opacity: '1'
           },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s both',
      }
    }
  },
   plugins: [
    require('@tailwindcss/typography')
   ]
};
export default config;
