"use client";

import type { Metadata } from "next";

import ErrorHeader from "@/components/layout/error-pages/ErrorHeader";
import Interactions from "@/components/layout/error-pages/Interactions";

export const metadata: Metadata = {
    title: "خطایی در پردازش درخواست رخ داده است",
    description: "متأسفانه در پردازش درخواست شما مشکلی به وجود آمده است. ممکن است این مشکل موقتی باشد. لطفاً صفحه را دوباره بارگذاری کنید یا در صورت ادامه مشکل، با پشتیبانی تماس بگیرید.",
};

function Error({ reset }: { reset: () => void }) {
    return (
        <>
            <main className="my-10 sm:my-20">
                <div className="container space-y-8">
                    <ErrorHeader reset={reset} />
                    <Interactions />
                </div>
            </main>
        </>
    );
}

export default Error;
