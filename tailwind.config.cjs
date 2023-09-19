/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  //add daisyui settings theme
  daisyui: {
    styled: true,
    themes: true,
    rtl: false,
  },
};
