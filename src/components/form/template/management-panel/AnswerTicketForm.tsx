"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { answerTicket } from "@/api/mutations/tickets";
import { AnswerTicketStatusOptions } from "@/api/errors/tickets";

import { statusHandler } from "@/libs/responses";
import { getUploadType } from "@/libs/funcs";

import { UploadType } from "@/constants/uploads";

import { AnswerTicketSchema, AnswerTicketSchemaType } from "@/validators/tickets";

import TextArea from "../../TextArea";

import Button from "@/components/ui/Button";
import Uploader from "@/components/ui/Uploader";

import Plain from "@/components/svgs/Plain";

type AnswerTicketFormProps = { ticketId: string; onMessage: (data: AnswerTicketSchemaType) => Promise<void> };

function AnswerTicketForm({ ticketId, onMessage }: AnswerTicketFormProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isDirty },
        setValue,
        watch,
        reset,
    } = useForm<AnswerTicketSchemaType>({
        defaultValues: {
            content: "",
        },
        resolver: zodResolver(AnswerTicketSchema),
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

    const submitHandler = async (data: AnswerTicketSchemaType) => {
        const res = await answerTicket({ ticketId }, data);

        statusHandler(res, AnswerTicketStatusOptions);

        if (res.success) {
            reset();
            await onMessage(data);
            router.refresh();
        }
    };

    const isAttachedUploaded = !!watch("attached");

    return (
        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
            <TextArea control={control} name="content" placeholder="پیام خود را وارد کنید" rows={1} textAreaClassName="min-h-4" className="w-full" showFromDetails={false} />
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <Button size="lg" disabled={!isDirty || isSubmitting}>
                    {isSubmitting ? "در حال ارسال پیام" : "ارسال پیام"}
                    <Plain />
                </Button>
                <div className="w-full sm:w-max">
                    <Uploader isUploaded={isAttachedUploaded} onUpload={onUpload} onCancel={onCancelUpload} />
                </div>
            </div>
        </form>
    );
}

export default AnswerTicketForm;
