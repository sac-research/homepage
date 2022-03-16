module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./data/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: (theme) => ({}),
        },
        fontFamily: {
            display: ["Inter"],
            body: ["Inter"],
            sans: ["Inter"],
        },
    },
    presets: [require("./utils/tailwind-preset")],
    plugins: [],
};
