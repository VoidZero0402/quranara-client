"use client";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import Comment from "@/components/ui/Comment";
import Button from "@/components/ui/Button";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";
import { getCourseComments } from "@/api/queries/courses";

import { Pagination, Response } from "@/types/response.types";
import { Comment as CommentType } from "@/types/comment.types";

type CommentsProps = { queryKey: string[]; fetcher: ({ pageParam }: { pageParam: number }) => Promise<Response<{ comments: CommentType[]; pagination: Pagination }>> };

function Comments({ queryKey, fetcher }: CommentsProps) {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
        queryKey,
        queryFn: fetcher,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            const { page, pagesCount } = lastPage.data.pagination;
            return page < pagesCount ? page + 1 : undefined;
        },
    });

    return (
        <section className="flex flex-col gap-y-8 p-4 sm:p-8 bg-white dark:bg-gray-850 rounded-2xl" id="comments">
            <div className="flex items-center justify-between">
                <span className="flex items-center gap-x-2 font-pelak-medium text-lg sm:text-xl text-gray-800 dark:text-gray-200">
                    <ChatRoundLine className="w-8" />
                    دیدگاه و پرسش
                </span>
                <Button size="lg" variant="filled-secondary">
                    ثبت دیدگاه
                </Button>
            </div>

            <div className="space-y-8">
                {data.pages.flat().map((res, index) => {
                    if (index === 0 && res.data.pagination.count === 0) {
                        return <EmptyState key="empty-state" />;
                    }

                    return res.data.comments.map((comment) => <Comment key={comment._id} {...comment} onReply={() => {}} />);
                })}

                {hasNextPage && (
                    <div className="flex-center mt-12">
                        <Button size="lg" variant="filled-secondary" onClick={() => fetchNextPage()}>
                            {isFetchingNextPage ? "در حال بروزرسانی دیدگاه‌ها" : "مشاهده دیدگاه‌های بیشتر"}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}

function EmptyState() {
    return (
        <div className="flex-center col-span-4 py-10">
            <span className="font-pelak-medium text-lg text-gray-600 dark:text-gray-400"> دیدگاهی برای این مقاله ثبت نشده است</span>
        </div>
    );
}

export default Comments;
