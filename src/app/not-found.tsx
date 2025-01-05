import Navbar from "@/components/layout/shared/Navbar";
import Footer from "@/components/layout/shared/Footer";

import NotFoundHeader from "@/components/layout/error-pages/NotFoundHeader";
import Interactions from "@/components/layout/error-pages/Interactions";

function NotFound() {
    return (
        <>
            <Navbar />
            <main className="my-10">
                <div className="container space-y-8">
                    <NotFoundHeader />
                    <Interactions />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default NotFound;
