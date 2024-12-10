"use client";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getSavedBlog } from "@/api/queries/me";

import Blog, { BlogLoading } from "@/components/card/Blog";

import Button from "@/components/ui/Button";
import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

import Widgets from "@/components/svgs/Widgets";

function Blogs() {
    const fetchBlogs = async ({ pageParam = 1 }: { pageParam: number }) => {
        return await getSavedBlog({ page: pageParam, limit: 8 });
    };

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
        queryKey: ["saved-infinite-blogs"],
        queryFn: fetchBlogs,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {            
            const { page, pagesCount } = lastPage.data.pagination;
            return page < pagesCount ? page + 1 : undefined;
        },
    });

    return (
        <section className="space-y-8">
            <div className="flex items-center justify-between font-pelak-medium text-lg xl:text-xl text-gray-700 dark:text-gray-300">
                <span className="flex items-center gap-x-1">
                    <Widgets className="w-8" />
                    مقالات ذخیره شده
                </span>
                {!!data.pages[0].data.pagination.count && <span className="">{data.pages[0].data.pagination.count} مقاله</span>}
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 min-[1480px]:grid-cols-4 gap-8">
                {data.pages.flat().map((res, index) => {
                    if (index === 0 && res.data.pagination.count === 0) {
                        return <EmptyState key="empty-state" />;
                    }

                    return res.data.saves.map((blog) => <Blog key={blog._id} {...blog} />);
                })}
            </div>
            {hasNextPage && (
                <div className="flex-center mt-12">
                    <Button size="lg" disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
                        {isFetchingNextPage ? "در حال بروزرسانی مقالات" : "مشاهده مقالات بیشتر"}
                    </Button>
                </div>
            )}
        </section>
    );
}

function EmptyState() {
    return (
        <div className="flex-center col-span-4 py-10">
            <span className="font-pelak-medium text-lg text-gray-600 dark:text-gray-400">هنوز مقاله‌ای رو ذخیره نکردی</span>
        </div>
    );
}

export function BlogsLoading() {
    return (
        <section className="space-y-8">
            <div className="flex items-center justify-between font-pelak-medium text-lg xl:text-xl text-gray-700 dark:text-gray-300">
                <span className="flex items-center gap-x-1">
                    <Widgets className="w-8" />
                    مقالات ذخیره شده
                </span>
                <div>
                    <Skeleton>
                        <SkeletonFrame className="h-7 w-16" />
                    </Skeleton>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 min-[1480px]:grid-cols-4 gap-8">
                <BlogLoading />
                <BlogLoading />
                <BlogLoading />
                <BlogLoading />
            </div>
        </section>
    );
}

export default Blogs;
