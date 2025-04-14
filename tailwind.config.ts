import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      animation: {
        blob: "blob 8s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'slide-loop': 'slide 40s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "22%": {
            transform: "translate(-75px,-75px) scale(1.1)",
          },
          "33%": {
            transform: "translate(30px,-50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(15px,-25px) scale(0.9)",
          },
          "86%": {
            transform: "translate(-25px,25px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      fontFamily: {
        mitr:["var(--font-mitr)"]
      },
      colors: {
        themeColor:'#023047',
        secondary: '#118ab2',
        blue:'#0d3150',
        label:'#ffb703',
        panel1:'#8ecae6',
        panel2:'#ff5d13',
        logoColor:'#ff5d13',
        dirtyOrange:'#06d6a0',
        oneOff:'#edf2f4'
      },
      // colors: {
      //   primary: "#a11940",
      //   secondary: '#ffc4c4',
      //   blue:'#0d3150',
      //   label:'#FF736C',
      //   panel1:'#d1b7fe',
      //   panel2:'#0d3150',
      //   themeColor:'#a11940',
      //   logoColor:'#ff5d13',
      //   dirtyOrange:'#ed8c2a'
      // },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
