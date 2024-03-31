/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            nunito: ["Barlow", "sans-serif"],
            fraunces: ["Fraunces", "serif"],
        },
        extend: {},
    },
    plugins: [require("daisyui")],
};
