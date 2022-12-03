module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                text: "text 5s ease infinite",
            },
            keyframes: {
                text: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
        },
    },
    daisyui: {
        themes: [
            {
                sacTheme: {
                    primary: "#4ade80",
                    secondary: "#828DF8",
                    accent: "#F471B5",
                    neutral: "#1D283A",
                    "base-100": "#0F1729",
                    info: "#0CA6E9",
                    success: "#2BD4BD",
                    warning: "#F4C152",
                    error: "#FB6F84",
                },
            },
            "light",
            "dark",
        ],
    },
    plugins: [require("daisyui")],
    darkMode: "class",
};
