/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/**/*.{html,js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      customColor: "#1c92d2",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
};
export const plugins = [];
