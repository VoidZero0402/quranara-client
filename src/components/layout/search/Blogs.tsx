import Link from "next/link";

import { getBlogs } from "@/api/queries/blog";

import Blog, { BlogLoading } from "@/components/card/Blog";

import Button from "@/components/ui/Button";

import LongArrowLeft from "@/components/svgs/LongArrowLeft";
import Widgets from "@/components/svgs/Widgets";
import Magnifer from "@/components/svgs/Magnifer";

type BlogsProps = { query: string };

async function Blogs({ query }: BlogsProps) {
    const { data } = await getBlogs({ page: 1, limit: 8, sort: "default", search: query });

    return (
        <section className="space-y-8" id="blog">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-0">
                <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-start">
                    <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
                        <Widgets className="w-8" />
                        <h2 className="font-pelak-semibold text-2xl">مقالات تخصصی قرآن‌آرا</h2>
                    </div>
                    <p className="font-pelak-medium text-gray-500">نتیجه جستجوی &quot;{query}&quot; در مقالات تخصصی قرآن‌آرا</p>
                </div>
                <Link href="/blog">
                    <Button size="lg" rounded="lg" variant="text-primary" className="font-pelak-medium">
                        مشاهده همه مقالات
                        <LongArrowLeft />
                    </Button>
                </Link>
            </div>
            {!!data.blogs.length ? (
                <>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {data.blogs.map((blog) => (
                            <Blog key={blog._id} {...blog} />
                        ))}
                    </div>
                    {data.pagination.pagesCount !== 1 && (
                        <div className="flex-center py-10">
                            <Link href={`/blog?search=${query}`}>
                                <Button size="lg">
                                    <Magnifer />
                                    جستجوی کامل در مقالات
                                </Button>
                            </Link>
                        </div>
                    )}
                </>
            ) : (
                <EmptyState query={query} />
            )}
        </section>
    );
}

function EmptyState({ query }: BlogsProps) {
    return (
        <div className="flex-center col-span-4 py-10">
            <span className="font-pelak-medium text-center text-lg text-gray-600 dark:text-gray-400 leading-8">مقاله‌ای در نتیجه جستجو &quot;{query}&quot; پیدا نشد</span>
        </div>
    );
}

export function BlogsLoading({ query }: BlogsProps) {
    return (
        <section className="space-y-8" id="blog">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-0">
                <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-start">
                    <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
                        <Widgets className="w-8" />
                        <h2 className="font-pelak-semibold text-2xl">مقالات تخصصی قرآن‌آرا</h2>
                    </div>
                    <p className="font-pelak-medium text-gray-500">نتیجه جستجوی &quot;{query}&quot; در مقالات تخصصی قرآن‌آرا</p>
                </div>
                <Link href="/blog">
                    <Button size="lg" rounded="lg" variant="text-primary" className="font-pelak-medium">
                        مشاهده همه مقالات
                        <LongArrowLeft />
                    </Button>
                </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <BlogLoading />
                <BlogLoading />
                <BlogLoading />
                <BlogLoading />
            </div>
        </section>
    );
}

export default Blogs;
