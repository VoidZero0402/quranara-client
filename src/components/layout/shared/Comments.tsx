"use client";

import useModal from "@/hooks/useModal";

import CreateCommentModal from "@/components/modal/CreateCommentModal";

import Comment from "@/components/ui/Comment";
import Button from "@/components/ui/Button";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";

function Comments() {
    const { isOpen, isPending, props, open, close } = useModal<{ replyTo?: string }>();

    return (
        <section className="flex flex-col gap-y-8 p-4 sm:p-8 bg-white dark:bg-gray-850 rounded-2xl">
            <div className="flex items-center justify-between">
                <span className="flex items-center gap-x-2 font-pelak-medium text-lg sm:text-xl text-gray-800 dark:text-gray-200">
                    <ChatRoundLine className="w-6 sm:w-8" />
                    دیدگاه و پرسش
                </span>
                <Button size="lg" variant="filled-secondary" disabled={isPending} onClick={() => open({})}>
                    ثبت دیدگاه
                </Button>
            </div>

            <CreateCommentModal isOpen={isOpen} onClose={close} {...props} />

            <div className="space-y-8">
                <Comment onReply={open} />
                <Comment onReply={open} />
                <Comment onReply={open} />

                <div className="flex-center mt-12">
                    <Button size="lg" variant="filled-secondary">
                        مشاهده دیدگاه‌های بیشتر
                    </Button>
                </div>
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
