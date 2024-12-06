import Navigation from "@/components/layout/panel/shared/Navigation";

function PanelLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="lg:pr-72">
            <div className="sm:p-4">
                <Navigation />
                {/* <main className="bg-white dark:bg-gray-850 h-full rounded-2xl">{children}</main> */}
            </div>
        </div>
    );
}

export default PanelLayout;
