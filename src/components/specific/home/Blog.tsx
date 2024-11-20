import Link from "next/link";

import { getAllBlogs } from "@/api/queries/blog";

import Button from "@/components/ui/Button";

import BlogSlides from "./BlogSlides";

import LongArrowLeft from "@/components/svgs/LongArrowLeft";
import Document from "@/components/svgs/Document";

async function Blog() {
    const { data } = await getAllBlogs({ limit: "8" });

    return (
        <section className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-0">
                <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-start">
                    <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
                        <Document className="w-8" strokeWidth={1.5} />
                        <h2 className="font-pelak-semibold text-2xl">مقالات تخصصی قرآن‌آرا</h2>
                    </div>
                    <p className="text-gray-500 font-pelak-medium">مطالب ارزشمند و عمقی درباره قرآن و مفاهیم آن</p>
                </div>
                <Link href="/blog">
                    <Button size="lg" rounded="lg" variant="text-primary" className="font-pelak-medium">
                        مشاهده همه مقالات
                        <LongArrowLeft className="w-6" strokeWidth={1.5} />
                    </Button>
                </Link>
            </div>
            <BlogSlides blogs={data.blogs} />
        </section>
    );
}

export default Blog;
