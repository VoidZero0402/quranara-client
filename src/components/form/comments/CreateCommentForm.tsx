"use client";

import { useForm } from "react-hook-form";

import TextArea from "../TextArea";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";

import CheckCircle from "@/components/svgs/CheckCircle";

type CreateCommentFormProps = { onCancel: () => void, replyTo?: string }

function CreateCommentForm({ onCancel, replyTo }: CreateCommentFormProps) {
    const { control } = useForm({});

    return (
        <div className="space-y-8 sm:p-6">
            <div className="flex items-center gap-x-2">
                <Avatar />
                <div className="space-y-2 font-pelak-medium text-gray-800 dark:text-gray-200">
                    <span className="block">محمدحسن خانی</span>
                    <span className="block text-sm text-gray-600 dark:text-gray-400">{replyTo ? `در پاسخ به ${replyTo}` : "ثبت دیدگاه جدید"}</span>
                </div>
            </div>
            <TextArea control={control} name="comment" label="متن دیدگاه شما" placeholder="متن دیدگاهت رو اینجا وارد کن ..." maxLength={2000} textAreaClassName="bg-gray-100 dark:bg-gray-850" />
            <div className="flex justify-end gap-x-4">
                <Button size="lg" variant="filled-secondary" onClick={onCancel}>
                    انصراف
                </Button>
                <Button size="lg" variant="filled-primary">
                    <CheckCircle />
                    ثبت دیدگاه
                </Button>
            </div>
        </div>
    );
}

export default CreateCommentForm;
