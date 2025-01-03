/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            sans: ["Inter Variable", "Inter", "Arial", sans-serif],
            serif: ["Nixie One", "Georgia", serif],
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
