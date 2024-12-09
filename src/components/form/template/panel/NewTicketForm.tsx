"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createTicket } from "@/api/mutations/tickets";
import { CreateTicketStatusOptions } from "@/api/errors/tickets";

import { TYPE } from "@/constants/tickets";
import { UploadType } from "@/constants/uploads";

import { CreateTicketSchema, CreateTicketSchemaType } from "@/validators/tickets";

import { getUploadType } from "@/libs/funcs";
import { statusHandler } from "@/libs/responses";

import TextField from "../../TextField";
import TextArea from "../../TextArea";
import Select, { SelectItem } from "../../Select";

import Uploader from "@/components/ui/Uploader";
import Button from "@/components/ui/Button";

import Plain from "@/components/svgs/Plain";

function NewTicketForm() {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        setValue,
        watch,
    } = useForm<CreateTicketSchemaType>({
        defaultValues: {
            title: "",
            content: "",
            type: TYPE.MANAGEMENT,
        },
        resolver: zodResolver(CreateTicketSchema),
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

    const submitHandler = async (data: CreateTicketSchemaType) => {
        const res = await createTicket(data);

        statusHandler(res, CreateTicketStatusOptions);

        if (res.success) {
            router.push("/panel/tickets");
        }
    };

    const isAttachedUploaded = !!watch("attached");

    return (
        <form className="space-y-8" onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col md:flex-row gap-8">
                <TextField control={control} name="title" label="عنوان تیکت" placeholder="عنوان تیکت را وارد کنید" className="md:w-2/3" />
                <Select control={control} name="type" label="نوع تیکت" defaultText="مدیریت آکادمی" className="md:w-1/3">
                    <SelectItem value={TYPE.SUPPORT} text="پشتیبانی وبسایت">
                        پشتیبانی وبسایت
                    </SelectItem>
                    <SelectItem value={TYPE.MANAGEMENT} text="مدیریت آکادمی">
                        مدیریت آکادمی
                    </SelectItem>
                </Select>
            </div>
            <TextArea control={control} name="content" label="توضیحات تیکت" placeholder="توضیحات تیکت را وارد کنید" rows={10} />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="w-full sm:w-max">
                    <Uploader isUploaded={isAttachedUploaded} onUpload={onUpload} onCancel={onCancelUpload} />
                </div>
                <Button size="lg" type="submit" disabled={isSubmitting} className="w-full sm:w-max">
                    <Plain />
                    {isSubmitting ? "در حال ارسال تیکت" : "ارسال تیکت جدید"}
                </Button>
            </div>
        </form>
    );
}

export default NewTicketForm;
