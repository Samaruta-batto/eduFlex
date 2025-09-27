
import type { Config } from "tailwindcss";

const config: Config = {
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
        animation: {
            'float-one': 'float-one 6s ease-in-out infinite',
            'float-two': 'float-two 7s ease-in-out infinite',
            'float-three': 'float-three 8s ease-in-out infinite',
        },
        keyframes: {
            'float-one': {
                '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)', opacity: '0.3' },
                '25%': { transform: 'translate(10px, -15px) rotate(5deg) scale(1.05)', opacity: '0.35' },
                '50%': { transform: 'translate(-5px, 5px) rotate(-5deg) scale(1)', opacity: '0.32' },
                '75%': { transform: 'translate(-20px, 10px) rotate(-10deg) scale(0.95)', opacity: '0.25' },
                '100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)', opacity: '0.3' },
            },
            'float-two': {
              '0%': { transform: 'translate(0, 0) rotate(45deg) scale(1)', opacity: '0.2' },
              '30%': { transform: 'translate(-15px, 20px) rotate(55deg) scale(1.1)', opacity: '0.25' },
              '60%': { transform: 'translate(10px, -10px) rotate(35deg) scale(1)', opacity: '0.18' },
              '100%': { transform: 'translate(0, 0) rotate(45deg) scale(1)', opacity: '0.2' },
            },
            'float-three': {
                '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.4' },
                '40%': { transform: 'translate(-45%, -55%) scale(1.08)', opacity: '0.45' },
                '80%': { transform: 'translate(-55%, -45%) scale(0.98)', opacity: '0.38' },
                '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.4' },
            },
        },
    },
  },
  plugins: [],
};
export default config;
