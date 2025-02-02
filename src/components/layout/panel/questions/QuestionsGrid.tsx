"use client";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getQuestions } from "@/api/queries/questions";

import Question, { QuestionLoading } from "@/components/card/panel/Question";

import Button from "@/components/ui/Button";
import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

function QuestionsGrid() {
    const fetchQuestions = async ({ pageParam = 1 }: { pageParam: number }) => {
        return await getQuestions({ page: pageParam, limit: 8 });
    };

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
        queryKey: ["infinite-questions"],
        queryFn: fetchQuestions,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            const { page, pagesCount } = lastPage.data.pagination;
            return page < pagesCount ? page + 1 : undefined;
        },
    });

    return (
        <section className="space-y-8">
            {!!data.pages[0].data.pagination.count && <span className="font-pelak-medium text-lg text-gray-700 dark:text-gray-300">{data.pages[0].data.pagination.count} پرسش و پاسخ</span>}
            <div className="grid md:grid-cols-2 gap-8">
                {data.pages.flat().map((res, index) => {
                    if (index === 0 && res.data.pagination.count === 0) {
                        return <EmptyState key="empty-state" />;
                    }

                    return res.data.questions.map((question) => <Question key={question._id} {...question} />);
                })}
            </div>
            {hasNextPage && (
                <div className="flex-center mt-12">
                    <Button size="lg" disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
                        {isFetchingNextPage ? "در حال بروزرسانی سوالات" : "مشاهده سوالات بیشتر"}
                    </Button>
                </div>
            )}
        </section>
    );
}

function EmptyState() {
    return (
        <div className="flex-center col-span-4 py-10">
            <span className="font-pelak-medium text-center sm:text-lg text-gray-600 dark:text-gray-400 leading-8 sm:leading-8">هنوز سوالی رو نپرسیدی</span>
        </div>
    );
}

export function QuestionsGridLoading() {
    return (
        <section className="space-y-8">
            <Skeleton>
                <SkeletonFrame className="h-6.5 w-32"></SkeletonFrame>
            </Skeleton>
            <div className="grid md:grid-cols-2 gap-8">
                <QuestionLoading />
                <QuestionLoading />
                <QuestionLoading />
                <QuestionLoading />
            </div>
        </section>
    );
}

export default QuestionsGrid;
