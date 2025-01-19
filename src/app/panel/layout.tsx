import type { Metadata } from "next";

import { authenticate } from "@/libs/server/funcs";

import Navigation from "@/components/layout/panel/shared/Navigation";

export const metadata: Metadata = {
    title: "پنل کاربری قرآن‌آرا",
};

async function PanelLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    await authenticate();

    return (
        <div className="lg:pr-72">
            <div className="flex flex-col gap-y-4 sm:p-4">
                <Navigation />
                <main className="mb-4 grow bg-white dark:bg-gray-850 h-full sm:rounded-2xl">{children}</main>
            </div>
        </div>
    );
}

export default PanelLayout;
