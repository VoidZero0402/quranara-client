import type { Metadata } from "next";

import Navbar from "@/components/layout/shared/Navbar";
import Footer from "@/components/layout/shared/Footer";

import NotFoundHeader from "@/components/layout/error-pages/NotFoundHeader";
import Interactions from "@/components/layout/error-pages/Interactions";

export const metadata: Metadata = {
    title: "صفحه‌ای که به دنبال آن هستید، پیدا نشد!",
    description: "متأسفیم، صفحه‌ای که به دنبال آن بودید ممکن است حذف شده باشد، آدرس اشتباه وارد شده باشد یا اصلاً وجود نداشته باشد. لطفاً از نوار جستجو استفاده کنید یا به صفحه اصلی بازگردید.",
};

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
