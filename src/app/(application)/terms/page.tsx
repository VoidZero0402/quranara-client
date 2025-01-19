import type { Metadata } from "next";

import Header from "@/components/layout/terms/Header";
import Main from "@/components/layout/terms/Main";

export const metadata: Metadata = {
    title: "قوانین و مقررات قرآن‌آرا",
    description: "قوانین آکادمی، شرایط استفاده و حریم خصوصی",
};

function Terms() {
    return (
        <main className="my-20">
            <div className="container space-y-8">
                <Header />
                <Main />
            </div>
        </main>
    );
}

export default Terms;
