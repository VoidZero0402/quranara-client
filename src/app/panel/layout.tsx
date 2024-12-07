import Navigation from "@/components/layout/panel/shared/Navigation";

function PanelLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="lg:pr-72">
            <div className="flex flex-col gap-y-4 sm:p-4">
                <Navigation />
                <main className="py-8 px-4 sm:p-8 mb-4 grow bg-white dark:bg-gray-850 h-full sm:rounded-2xl">{children}</main>
            </div>
        </div>
    );
}

export default PanelLayout;
