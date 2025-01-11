"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { answerComment } from "@/api/mutations/comments";
import { AnswerCommentStatusOptions } from "@/api/errors/comments";

import { statusHandler } from "@/libs/responses";

import { ReplyCommentSchema, ReplyCommentSchemaType } from "@/validators/comments";

import TextArea from "../../TextArea";

import Button from "@/components/ui/Button";

import { CommentIdentifiers } from "@/types/comment.types";

type AnswerCommentFormProps = { comment: CommentIdentifiers; onClose: () => void };

function AnswerCommentForm({ comment, onClose }: AnswerCommentFormProps) {
    const router = useRouter();

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
        const res = await answerComment({ commentId: comment._id }, data);

        statusHandler(res, AnswerCommentStatusOptions);

        if (res.success) {
            reset();
            onClose();
            router.refresh();
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
            <TextArea control={control} name="content" label="پاسخ شما به دیدگاه" placeholder="پاسخ خود را وارد کنید" caption="در صورت پاسخ به دیدگاه، دیدگاه بطور خودکار تایید خواهد شد" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ایجاد ثبت پاسخ" : "ثبت پاسخ"}
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </div>
        </form>
    );
}

export default AnswerCommentForm;
