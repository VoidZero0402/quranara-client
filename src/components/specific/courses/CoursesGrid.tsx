"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getAllCourses } from "@/api/queries/courses";

import { SORTING } from "@/constants/courses";

import Course, { CourseLoading } from "@/components/card/Course";

import Button from "@/components/ui/Button";
import UpdateIndicator from "@/components/ui/UpdateIndicator";

import { Sorting } from "@/types/course.types";

type CoursesGridProps = { updateCount: (count: number) => void };

function CoursesGrid({ updateCount }: CoursesGridProps) {
    const searchParams = useSearchParams();

    const fetchCourses = async ({ pageParam = 1 }: { pageParam: number }) => {
        const sort = (searchParams.get("sort") ?? SORTING.DEFAULT) as Sorting;
        const search = searchParams.get("search");

        return await getAllCourses({ page: pageParam, limit: 8, sort, ...(search && { search }) });
    };

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isFetching } = useSuspenseInfiniteQuery({
        queryKey: ["infinite-courses"],
        queryFn: fetchCourses,
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
            <UpdateIndicator show={isFetching} text="در حال بروزرسانی دوره‌ها" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {data.pages.flat().map((res, index) => {
                    if (index === 0 && res.data.pagination.count === 0) {
                        return <EmptyState key="empty-state" />;
                    }

                    return res.data.courses.map((course) => <Course key={course._id} {...course} />);
                })}
            </div>
            {hasNextPage && (
                <div className="flex-center mt-12">
                    <Button size="lg" disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
                        {isFetchingNextPage ? "در حال بروزرسانی دوره‌ها" : "مشاهده دوره‌های بیشتر"}
                    </Button>
                </div>
            )}
        </section>
    );
}

function EmptyState() {
    return (
        <div className="flex-center col-span-4 py-10">
            <span className="font-pelak-medium text-center text-lg text-gray-600 dark:text-gray-400 leading-8">دوره‌ای با این مشخصات پیدا نشد</span>
        </div>
    );
}

export function CoursesGridLoading() {
    return (
        <section>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <CourseLoading />
                <CourseLoading />
                <CourseLoading />
                <CourseLoading />
            </div>
        </section>
    );
}

export default CoursesGrid;
