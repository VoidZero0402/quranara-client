import type { Metadata } from "next";

import Header from "@/components/layout/blogs/Header";
import Main from "@/components/layout/blogs/Main";

export const metadata: Metadata = {
    title: "مقالات تخصصی قرآن‌آرا",
    description: "مطالب ارزشمند و عمقی درباره قرآن و مفاهیم آن",
    keywords: ["مفاهیم قرآنی", "آموزش قرآن کریم", "تجوید قرآن", " تجوید قرآن"],
};

function Blogs() {
    return (
        <main className="my-20">
            <div className="container space-y-8">
                <Header />
                <Main />
            </div>
        </main>
    );
}

export default Blogs;
