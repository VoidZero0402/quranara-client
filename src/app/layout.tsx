import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";

import { Toaster } from "react-hot-toast";

import Providers from "@/providers/Providers";

import { BASE_URL } from "@/constants/global";

import "./globals.css";

export const metadata: Metadata = {
    title: "قرآن‌آرا؛ پلی به سوی یادگیری و درک بهتر قرآن",
    description: "با قرآن‌آرا، دوره‌های متنوع روخوانی، روان‌خوانی و تفسیر قرآن را به زبانی روان و با کیفیت بالا بیاموزید",
    keywords: ["قرآن به زبان ساده", "تجوید قرآن", "حفظ قرآن", "آموزش قرآن", "تفسیر قرآن"],
    generator: "Next.js",
    applicationName: "Quranara",
    referrer: "origin-when-cross-origin",
    publisher: "Quranara",
    openGraph: {
        title: "قرآن‌آرا؛ پلی به سوی یادگیری و درک بهتر قرآن",
        description: "با قرآن‌آرا، دوره‌های متنوع روخوانی، روان‌خوانی و تفسیر قرآن را به زبانی روان و با کیفیت بالا بیاموزید",
        url: BASE_URL,
        siteName: "قرآن‌آرا",
        images: [
            {
                url: "https://nextjs.org/og.png",
                width: 1280,
                height: 720,
            },
        ],
        locale: "fa_IR",
        type: "website",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
        { media: "(prefers-color-scheme: dark)", color: "#facc15" },
    ],
};

const Pelak = localFont({
    src: "./fonts/PelakFA-Regular.woff2",
    variable: "--font-pelak",
});

const PelakMedium = localFont({
    src: "./fonts/PelakFA-Medium.woff2",
    variable: "--font-pelak-medium",
});

const PelakSemiBold = localFont({
    src: "./fonts/PelakFA-SemiBold.woff2",
    variable: "--font-pelak-semibold",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl" className={`${Pelak.variable} ${PelakMedium.variable} ${PelakSemiBold.variable}`} suppressHydrationWarning>
            <body className="font-pelak bg-gray-50 dark:bg-gray-900">
                <Providers>{children}</Providers>
                <Toaster position="top-right" />
            </body>
        </html>
    );
}
