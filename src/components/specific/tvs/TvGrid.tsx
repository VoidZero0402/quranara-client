"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getAllTvs } from "@/api/queries/tv";

import { SORTING } from "@/constants/blog";

import Tv, { TvLoading } from "@/components/card/Tv";

import Button from "@/components/ui/Button";
import UpdateIndicator from "@/components/ui/UpdateIndicator";

import { Sorting } from "@/types/blog.types";

type TvGridProps = { updateCount: (count: number) => void };

function TvGrid({ updateCount }: TvGridProps) {
    const searchParams = useSearchParams();

    const fetchTvs = async ({ pageParam = 1 }: { pageParam: number }) => {
        const sort = (searchParams.get("sort") ?? SORTING.DEFAULT) as Sorting;
        const search = searchParams.get("search");
        const category = searchParams.get("category");

        return await getAllTvs({ page: pageParam, limit: 8, sort, ...(search && { search }), ...(category && category !== "all" && { category }) });
    };

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isFetching } = useSuspenseInfiniteQuery({
        queryKey: ["infinite-tvs"],
        queryFn: fetchTvs,
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
            <UpdateIndicator show={isFetching} text="در حال بروزرسانی آموزش‌ها" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {data.pages.flat().map((res, index) => {
                    if (index === 0 && res.data.pagination.count === 0) {
                        return <EmptyState key="empty-state" />;
                    }

                    return res.data.tvs.map((tv) => <Tv key={tv._id} {...tv} />);
                })}
            </div>
            {hasNextPage && (
                <div className="flex-center mt-12">
                    <Button size="lg" disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
                        {isFetchingNextPage ? "در حال بروزرسانی آموزش‌ها" : "مشاهده آموزش‌های بیشتر"}
                    </Button>
                </div>
            )}
        </section>
    );
}

function EmptyState() {
    return (
        <div className="flex-center col-span-4 py-10">
            <span className="font-pelak-medium text-center text-lg text-gray-600 dark:text-gray-400 leading-8">آموزشی با این مشخصات پیدا نشد</span>
        </div>
    );
}

export function TvGridLoading() {
    return (
        <section>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <TvLoading />
                <TvLoading />
                <TvLoading />
                <TvLoading />
            </div>
        </section>
    );
}

export default TvGrid;
