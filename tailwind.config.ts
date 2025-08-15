import type { Config } from "tailwindcss";

export default {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: "class",
    theme: {
        extend: {
            container: {
                center: true,
                padding: "1rem",
            },
            colors: {
                gray: {
                    750: "#2b3544",
                    850: "#18202f",
                },
            },
            fontFamily: {
                pelak: ["var(--font-pelak)"],
                "pelak-medium": ["var(--font-pelak-medium)"],
                "pelak-semibold": ["var(--font-pelak-semibold)"],
            },
            spacing: {
                "4.5": "18px",
                "5.5": "22px",
                "6.5": "26px",
                "18": "72px",
                "21": "84px",
                "30": "120px",
                "35": "140px",
            },
            borderRadius: {
                "rounded-2xl": "0px",
            },
            keyframes: {
                enter: {
                    "0%": { opacity: "0", transform: "translateX(-20px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                leave: {
                    "0%": { opacity: "1", transform: "translateX(0)" },
                    "100%": { opacity: "0", transform: "translateX(-20px)" },
                },
                loading: {
                    "0%": { transform: "translateX(-100%)" },
                    "50%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            animation: {
                enter: "enter 150ms ease-in-out forwards",
                leave: "leave 150ms ease-in-out forwards",
                loading: "loading 2s ease-in-out infinite",
            },
        },
        screens: {
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
    },
    plugins: [
        function ({ addVariant }: { addVariant: Function }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
        },
    ],
} satisfies Config;
