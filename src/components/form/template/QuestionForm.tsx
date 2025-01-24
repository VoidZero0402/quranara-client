"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createQuestion, createQuestionMessage } from "@/api/mutations/questions";
import { CreateQuestionMessageStatusOptions } from "@/api/errors/questions";

import { UploadType } from "@/constants/uploads";

import { AnswerQuestionSchema, AnswerQuestionSchemaType } from "@/validators/questions";

import { statusHandler } from "@/libs/responses";
import { getUploadType } from "@/libs/funcs";

import useInvalidateQueries from "@/hooks/useInvalidateQueries";

import TextArea from "../TextArea";

import Button from "@/components/ui/Button";

import Uploader from "@/components/ui/Uploader";

type QuestionFormProps = { sessionId: string; questionId?: string };

function QuestionForm({ sessionId, questionId }: QuestionFormProps) {
    const router = useRouter();

    const invalidate = useInvalidateQueries(["infinite-questions"]);

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        setValue,
        watch,
        reset,
    } = useForm<AnswerQuestionSchemaType>({
        defaultValues: {
            content: "",
        },
        resolver: zodResolver(AnswerQuestionSchema),
    });

    const onUpload = useCallback((type: UploadType, url: string) => {
        setValue("attached.type", getUploadType(type), {
            shouldDirty: true,
            shouldTouch: true,
        });

        setValue("attached.url", url, {
            shouldDirty: true,
            shouldTouch: true,
        });
    }, []);

    const onCancelUpload = useCallback(() => {
        setValue("attached", undefined, {
            shouldDirty: true,
            shouldTouch: true,
        });
    }, []);

    const submitHandler = async (data: AnswerQuestionSchemaType) => {
        let res;

        if (questionId) {
            res = await createQuestionMessage({ questionId }, { session: sessionId, ...data });
        } else {
            res = await createQuestion({ session: sessionId, ...data });
        }

        statusHandler(res, CreateQuestionMessageStatusOptions);

        if (res.success) {
            reset();
            router.refresh();
            invalidate();
        }
    };

    const isAttachedUploaded = !!watch("attached");

    return (
        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
            <TextArea control={control} name="content" label="متن سوال شما" placeholder="سوال خود را بپرسید..." caption="بعد از پاسخ توسط مدرس، پاسخ سوال شما در همین صفحه و پنل کاربری شما قابل دسترس خواهد بود" />
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <Uploader isUploaded={isAttachedUploaded} onUpload={onUpload} onCancel={onCancelUpload} />
                <Button size="lg" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ثبت سوال" : "ثبت سوال جدید"}
                </Button>
            </div>
        </form>
    );
}

export default QuestionForm;
