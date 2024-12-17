"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createComment, replyComment } from "@/api/mutations/comments";
import { CreateCommentStatusOptions } from "@/api/errors/comments";

import { statusHandler } from "@/libs/responses";

import { ReplyCommentSchema, ReplyCommentSchemaType } from "@/validators/comments";

import TextArea from "../TextArea";

import Button from "@/components/ui/Button";

import NotificationUnreadLines from "@/components/svgs/NotificationUnreadLines";

type CommentFormProps = { entity: { name: string; _id: string }; replyTo?: { commentId: string; username: string } | null };

function CommentForm({ entity, replyTo }: CommentFormProps) {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<ReplyCommentSchemaType>({
        defaultValues: {
            content: "",
        },
        resolver: zodResolver(ReplyCommentSchema),
    });

    const submitHandler = async (data: ReplyCommentSchemaType) => {
        let res;

        if (replyTo) {
            res = await replyComment({ commentId: replyTo.commentId }, { content: data.content });
        } else {
            res = await createComment({ content: data.content, [entity.name]: entity._id });
        }

        statusHandler(res, CreateCommentStatusOptions);

        if (res.success) {
            reset();
        }
    };

    return (
        <form className="space-y-4 md:space-y-8 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl" onSubmit={handleSubmit(submitHandler)}>
            <div className="flex items-start justify-between">
                <div className="flex flex-col gap-y-2">
                    <span className="flex items-center gap-x-2 font-pelak-medium">
                        <NotificationUnreadLines />
                        ثبت دیدگاه جدید
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-6">دیدگاه شما پس از تایید توسط مدیریت به نمایش درخواهد آمد</p>
                    {replyTo && <p className="md:hidden font-pelak-medium text-sm mt-2 text-amber-400">در پاسخ به {replyTo.username}</p>}
                </div>
                {replyTo && <span className="hidden md:block py-2.5 px-4 font-pelak-medium text-sm gray-light dark:teal-light rounded-xl">در پاسخ به {replyTo.username}</span>}
            </div>
            <TextArea control={control} name="content" label="دیدگاه شما" placeholder="دیدگاه خود را بنویسید..." textAreaClassName="dark:bg-gray-850" />
            <div className="flex gap-x-2 justify-end">
                <Button size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ثبت دیدگاه" : "ثبت دیدگاه جدید"}
                </Button>
            </div>
        </form>
    );
}

export default CommentForm;
