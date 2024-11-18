import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
