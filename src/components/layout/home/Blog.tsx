import Link from "next/link";

import { getAllBlogs } from "@/api/queries/blog";

import BlogSlides from "@/components/specific/home/BlogSlides"; 

import Button from "@/components/ui/Button";

import LongArrowLeft from "@/components/svgs/LongArrowLeft";
import Widgets from "@/components/svgs/Widgets";

async function Blog() {
    const { data } = await getAllBlogs({ page: 1, limit: 8 });

    return (
        <section className="space-y-8" id="blog">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-0">
                <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-start">
                    <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
                        <Widgets className="w-8" />
                        <h2 className="font-pelak-semibold text-2xl">مقالات تخصصی قرآن‌آرا</h2>
                    </div>
                    <p className="font-pelak-medium text-gray-500">مطالب ارزشمند و عمقی درباره قرآن و مفاهیم آن</p>
                </div>
                <Link href="/blog">
                    <Button size="lg" rounded="lg" variant="text-primary" className="font-pelak-medium">
                        مشاهده همه مقالات
                        <LongArrowLeft />
                    </Button>
                </Link>
            </div>
            <BlogSlides blogs={data.blogs} />
        </section>
    );
}

export default Blog;
