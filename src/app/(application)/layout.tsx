import Navbar from "@/components/layout/shared/Navbar";
import Footer from "@/components/layout/shared/Footer";

function ApplicationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default ApplicationLayout;
