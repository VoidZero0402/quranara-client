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
            fontFamily: {
                pelak: ["var(--font-pelak)"],
                "pelak-medium": ["var(--font-pelak-medium)"],
                "pelak-semibold": ["var(--font-pelak-semibold)"],
            },
            spacing: {
                "4.5": "18px",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        fontSize: {
            xs: ["12px", "18px"],
            sm: ["14px", "20px"],
            base: ["16px", "24px"],
            md: ["18px", "28px"],
            lg: ["20px", "30px"],
            xl: ["24px", "32px"],
            "2xl": ["30px", "38px"],
            "3xl": [
                "36px",
                {
                    lineHeight: "44px",
                    letterSpacing: "-2%",
                },
            ],
            "4xl": [
                "48px",
                {
                    lineHeight: "60px",
                    letterSpacing: "-2%",
                },
            ],
            "5xl": [
                "60px",
                {
                    lineHeight: "72px",
                    letterSpacing: "-2%",
                },
            ],
            "6xl": [
                "72px",
                {
                    lineHeight: "90px",
                    letterSpacing: "-2%",
                },
            ],
        },
    },
    plugins: [
        function ({ addVariant }: { addVariant: Function }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
        },
    ],
} satisfies Config;
