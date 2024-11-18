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
            },
            keyframes: {
                shimmer: {
                    "100%": {
                        transform: "translateX(100%)",
                    },
                },
            },
        },
        screens: {
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
