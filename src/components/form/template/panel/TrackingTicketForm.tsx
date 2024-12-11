"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createTicketMessage } from "@/api/mutations/tickets";
import { CreateTicketMessageStatusOptions } from "@/api/errors/tickets";

import { UploadType } from "@/constants/uploads";

import { AnswerTicketSchema, AnswerTicketSchemaType } from "@/validators/tickets";

import { getUploadType } from "@/libs/funcs";
import { statusHandler } from "@/libs/responses";

import TextArea from "../../TextArea";

import Uploader from "@/components/ui/Uploader";
import Button from "@/components/ui/Button";

import Plain from "@/components/svgs/Plain";

type TrackingTicketFormProps = { _id: string };

function TrackingTicketForm({ _id }: TrackingTicketFormProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
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
        const res = await createTicketMessage({ ticketId: _id }, data);

        statusHandler(res, CreateTicketMessageStatusOptions);

        if (res.success) {
            reset();
            router.refresh();
        }
    };

    const isAttachedUploaded = !!watch("attached");

    return (
        <form className="space-y-4 bg-white dark:bg-gray-850 sm:p-8 rounded-xl" onSubmit={handleSubmit(submitHandler)}>
            <TextArea control={control} name="content" label="پیام جدید شما" placeholder="پیام خود را وارد کنید" className="grow" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-full sm:w-max">
                    <Uploader isUploaded={isAttachedUploaded} onUpload={onUpload} onCancel={onCancelUpload} />
                </div>
                <Button size="lg" disabled={isSubmitting} className="w-full sm:w-max">
                    <Plain />
                    {isSubmitting ? "در حال ارسال پیام جدید" : "ارسال پیام جدید"}
                </Button>
            </div>
        </form>
    );
}

export default TrackingTicketForm;
