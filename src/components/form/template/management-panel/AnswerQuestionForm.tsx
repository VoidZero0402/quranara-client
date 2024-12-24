"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { answerQuestion } from "@/api/mutations/questions";
import { AnswerQuestionStatusOptions } from "@/api/errors/questions";

import { statusHandler } from "@/libs/responses";
import { getUploadType } from "@/libs/funcs";

import { UploadType } from "@/constants/uploads";

import { AnswerQuestionSchema, AnswerQuestionSchemaType } from "@/validators/questions";

import TextArea from "../../TextArea";

import Button from "@/components/ui/Button";
import Uploader from "@/components/ui/Uploader";

import Plain from "@/components/svgs/Plain";

type AnswerQuestionFormProps = { questionId: string; onMessage: (data: AnswerQuestionSchemaType) => Promise<void> };

function AnswerQuestionForm({ questionId, onMessage }: AnswerQuestionFormProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isDirty },
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
        const res = await answerQuestion({ questionId }, data);

        statusHandler(res, AnswerQuestionStatusOptions);

        if (res.success) {
            reset();
            await onMessage(data);
            router.refresh();
        }
    };

    const isAttachedUploaded = !!watch("attached");

    return (
        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
            <TextArea control={control} name="content" placeholder="پاسخ خود را وارد کنید" rows={1} textAreaClassName="min-h-4" className="w-full" showFromDetails={false} />
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <Button size="lg" disabled={!isDirty || isSubmitting}>
                    {isSubmitting ? "در حال ارسال پاسخ" : "ارسال پاسخ"}
                    <Plain />
                </Button>
                <div className="w-full sm:w-max">
                    <Uploader isUploaded={isAttachedUploaded} onUpload={onUpload} onCancel={onCancelUpload} />
                </div>
            </div>
        </form>
    );
}

export default AnswerQuestionForm;
