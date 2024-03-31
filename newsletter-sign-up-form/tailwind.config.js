/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "grey-dark-slate": "hsl(234, 29%, 20%)",
                "grey-charcoal": "hsl(235, 18%, 26%)",
                grey: "hsl(231, 7%, 60%)",
                white: "hsl(0, 0%, 100%)",
                tomato: "hsl(4, 100%, 67%)",
            },
        },
    },
    plugins: [require("daisyui")],
};
