"use client";

import { useState, useRef, useCallback } from "react";
import { useSuspenseQuery, useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getUser } from "@/libs/apis";

import CommentForm from "@/components/form/template/CommentForm";

import Comment from "@/components/ui/Comment";
import Button from "@/components/ui/Button";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";

import { Pagination, Response } from "@/types/response.types";
import { Comment as CommentType } from "@/types/comment.types";

type CommentsProps = { entity: { name: string; _id: string }; queryKey: string[]; fetcher: ({ pageParam }: { pageParam: number }) => Promise<Response<{ comments: CommentType[]; pagination: Pagination }>> };

function Comments({ entity, queryKey, fetcher }: CommentsProps) {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
        queryKey,
        queryFn: fetcher,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            const { page, pagesCount } = lastPage.data.pagination;
            return page < pagesCount ? page + 1 : undefined;
        },
    });

    const { data: user } = useSuspenseQuery({ queryKey: ["get-me-user"], queryFn: getUser });

    const [replyTo, setReplyTo] = useState<{ commentId: string; username: string } | null>(null);

    const commentFormRef = useRef<HTMLDivElement | null>(null);

    const onReply = useCallback((commentId: string, username: string) => {
        setReplyTo({ commentId, username });
        commentFormRef.current?.scrollIntoView();
    }, []);

    return (
        <section className="flex flex-col gap-y-4 p-4 sm:p-8 bg-white dark:bg-gray-850 rounded-2xl" id="comments">
            <div className="flex items-center justify-between">
                <span className="flex items-center gap-x-2 font-pelak-medium text-lg sm:text-xl text-gray-800 dark:text-gray-200">
                    <ChatRoundLine className="w-8" />
                    دیدگاه و پرسش
                </span>
            </div>

            {user ? (
                <div ref={commentFormRef} className="my-4">
                    <CommentForm entity={entity} replyTo={replyTo} />
                </div>
            ) : (
                <span className="font-pelak-medium text-sm text-blue-500 dark:text-amber-400 leading-8">برای ثبت نظر باید به حساب کاربری خود وارد شوید</span>
            )}

            <div className="space-y-8">
                {data.pages.flat().map((res, index) => {
                    if (index === 0 && res.data.pagination.count === 0) {
                        return <EmptyState key="empty-state" />;
                    }

                    return res.data.comments.map((comment) => <Comment key={comment._id} {...comment} onReply={onReply} />);
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
            <span className="font-pelak-medium text-center sm:text-lg text-gray-600 dark:text-gray-400 leading-8 sm:leading-8">دیدگاهی برای این مقاله ثبت نشده است</span>
        </div>
    );
}

export default Comments;
