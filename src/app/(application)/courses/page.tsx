import type { Metadata } from "next";

import Header from "@/components/layout/courses/Header";
import Main from "@/components/layout/courses/Main";

export const metadata: Metadata = {
    title: "دوره‌های تخصصی قرآن‌آرا",
    description: "آموزش کامل از روخوانی تا تفسیر قرآن",
    keywords: ["آموزش قرآن", "درک عمیق‌ مفاهیم قرآنی", "آموزش ترتیل و قرائت قرآن", "آموزش حفظ قرآن"],
};

function Courses() {
    return (
        <main className="my-20">
            <div className="container space-y-8">
                <Header />
                <Main />
            </div>
        </main>
    );
}

export default Courses;
