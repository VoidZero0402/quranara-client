"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getBlogs } from "@/api/queries/blog";

import { SORTING } from "@/constants/blog";

import Blog, { BlogLoading } from "@/components/card/Blog";

import Button from "@/components/ui/Button";
import UpdateIndicator from "@/components/ui/UpdateIndicator";

import { Sorting } from "@/types/blog.types";

type BlogGridProps = { updateCount: (count: number) => void };

function BlogGrid({ updateCount }: BlogGridProps) {
    const searchParams = useSearchParams();

    const fetchBlogs = async ({ pageParam = 1 }: { pageParam: number }) => {
        const sort = (searchParams.get("sort") ?? SORTING.DEFAULT) as Sorting;
        const search = searchParams.get("search");
        const category = searchParams.get("category");

        return await getBlogs({ page: pageParam, limit: 8, sort, ...(search && { search }), ...(category && category !== "all" && { category }) });
    };

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isFetching } = useSuspenseInfiniteQuery({
        queryKey: ["infinite-blogs"],
        queryFn: fetchBlogs,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            const { page, pagesCount } = lastPage.data.pagination;
            return page < pagesCount ? page + 1 : undefined;
        },
    });

    useEffect(() => {
        refetch();
    }, [searchParams]);

    useEffect(() => {
        updateCount(data.pages[0].data.pagination.count);
    }, [data]);

    return (
        <section>
            <UpdateIndicator show={isFetching} text="در حال بروزرسانی مقالات" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {data.pages.flat().map((res, index) => {
                    if (index === 0 && res.data.pagination.count === 0) {
                        return <EmptyState key="empty-state" />;
                    }

                    return res.data.blogs.map((blog) => <Blog key={blog._id} {...blog} />);
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
            <span className="font-pelak-medium text-lg text-gray-600 dark:text-gray-400">مقاله‌ای با این مشخصات پیدا نشد</span>
        </div>
    );
}

export function BlogGridLoading() {
    return (
        <section>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <BlogLoading />
                <BlogLoading />
                <BlogLoading />
                <BlogLoading />
            </div>
        </section>
    );
}

export default BlogGrid;
