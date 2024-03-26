/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Outfit", "Arial", "sans-serif"],
      },
    },
    fontFamily: {
      sans: ["DM Sans", "Inter", "Helvetica", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
