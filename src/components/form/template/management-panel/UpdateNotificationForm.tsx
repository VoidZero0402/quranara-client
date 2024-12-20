"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { updateNotification } from "@/api/mutations/notifications";
import { UpdateNotificationStatusOptions } from "@/api/errors/notifications";

import { statusHandler } from "@/libs/responses";

import { CreateNotificationSchema, CreateNotificationSchemaType } from "@/validators/notifications";

import TextArea from "../../TextArea";

import Button from "@/components/ui/Button";

import { Notification } from "@/types/notification.types";

type UpdateNotificationFormProps = { onClose: () => void; notification: Notification };

function UpdateNotificationForm({ onClose, notification }: UpdateNotificationFormProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<CreateNotificationSchemaType>({
        values: {
            title: notification?.title,
            description: notification?.description,
        },
        resolver: zodResolver(CreateNotificationSchema),
    });

    const submitHandler = async (data: CreateNotificationSchemaType) => {
        const res = await updateNotification({ notificationId: notification._id }, data);

        statusHandler(res, UpdateNotificationStatusOptions);

        if (res.status === 200) {
            onClose();
            router.refresh();
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
            <TextArea control={control} name="title" label="عنوان اعلان" placeholder="عنوان اعلان را وارد کنید" rows={2} textAreaClassName="min-h-20" />
            <TextArea control={control} name="description" label="توضیحات اعلان" placeholder="توضیحات اعلان را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ویرایش اعلان" : "ویرایش اعلان"}
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </div>
        </form>
    );
}

export default UpdateNotificationForm;
