/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        mono: { ...colors.zinc },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: 'class',
};
