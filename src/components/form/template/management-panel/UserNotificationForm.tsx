"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { sendNotificationOne } from "@/api/mutations/notifications";
import { SendNotificationOneStatusOptions } from "@/api/errors/notifications";

import { statusHandler } from "@/libs/responses";

import { CreateNotificationSchema, CreateNotificationSchemaType } from "@/validators/notifications";

import TextArea from "../../TextArea";

import Button from "@/components/ui/Button";

type NotificationFormProps = { userId: string; onClose: () => void };

function UserNotificationForm({ userId, onClose }: NotificationFormProps) {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<CreateNotificationSchemaType>({
        defaultValues: {
            title: "",
            description: "",
        },
        resolver: zodResolver(CreateNotificationSchema),
    });

    const submitHandler = async (data: CreateNotificationSchemaType) => {
        const res = await sendNotificationOne({ ...data, user: userId });

        statusHandler(res, SendNotificationOneStatusOptions);

        if (res.status === 201) {
            onClose();
            reset();
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
            <TextArea control={control} name="title" label="عنوان اعلان" placeholder="عنوان اعلان را وارد کنید" rows={2} textAreaClassName="min-h-20" />
            <TextArea control={control} name="description" label="توضیحات اعلان" placeholder="توضیحات اعلان را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ارسال اعلان" : "ارسال اعلان"}
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </div>
        </form>
    );
}

export default UserNotificationForm;
