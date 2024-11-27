import Navbar from "@/components/layout/shared/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
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
            <ScrollToTop />
            <Footer />
        </>
    );
}

export default ApplicationLayout;
