"use client";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getLikedTv } from "@/api/queries/me";

import Tv, { TvLoading } from "@/components/card/Tv";

import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";
import Button from "@/components/ui/Button";

import PlayCircle from "@/components/svgs/PlayCircle";

function Tvs() {
    const fetchTvs = async ({ pageParam = 1 }: { pageParam: number }) => {
        return await getLikedTv({ page: pageParam, limit: 8 });
    };

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
        queryKey: ["liked-infinite-tvs"],
        queryFn: fetchTvs,
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
                    <PlayCircle className="w-8" />
                    آموزش‌های پسندیده شده
                </span>
                {!!data.pages[0].data.pagination.count && <span className="">{data.pages[0].data.pagination.count} آموزش</span>}
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 min-[1480px]:grid-cols-4 gap-8">
                {data.pages.flat().map((res, index) => {
                    if (index === 0 && res.data.pagination.count === 0) {
                        return <EmptyState key="empty-state" />;
                    }

                    return res.data.likes.map((tv) => <Tv key={tv._id} {...tv} />);
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
            <span className="font-pelak-medium text-lg text-gray-600 dark:text-gray-400">هنوز آموزشی رو نپسندیدی</span>
        </div>
    );
}

export function TvsLoading() {
    return (
        <section className="space-y-8">
            <div className="flex items-center justify-between font-pelak-medium text-lg xl:text-xl text-gray-700 dark:text-gray-300">
                <span className="flex items-center gap-x-1">
                    <PlayCircle className="w-8" />
                    آموزش‌های پسندیده شده
                </span>
                <div>
                    <Skeleton>
                        <SkeletonFrame className="h-7 w-16" />
                    </Skeleton>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 min-[1480px]:grid-cols-4 gap-8">
                <TvLoading />
                <TvLoading />
                <TvLoading />
                <TvLoading />
            </div>
        </section>
    );
}

export default Tvs;
