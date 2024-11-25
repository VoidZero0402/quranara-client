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
                "6.5": "26px",
                "18": "72px",
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
            },
            animation: {
                enter: "enter 150ms ease-in-out forwards",
                leave: "leave 150ms ease-in-out forwards",
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
