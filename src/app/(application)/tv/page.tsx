import type { Metadata } from "next";

import Header from "@/components/layout/tvs/Header";
import Main from "@/components/layout/tvs/Main";

export const metadata: Metadata = {
    title: "ویدیوهای آموزشی قرآن‌آرا",
    description: "ویدیوهای کاربردی برای آشنایی با قرآن",
    keywords: ["آموزش قرآن", "ویدیو آموزش قرآن", "آموزش ترتیل و قرائت قرآن", "آموزش ویدیویی حفظ قرآن"],
};

function Tvs() {
    return (
        <main className="my-20">
            <div className="container space-y-8">
                <Header />
                <Main />
            </div>
        </main>
    );
}

export default Tvs;
