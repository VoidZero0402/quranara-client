"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { courses as coursesCache } from "@/api/cache/tags";
import { createSession } from "@/api/mutations/sessions";
import { CreateSessionStatusOptions } from "@/api/errors/sessions";

import { statusHandler } from "@/libs/responses";
import { getTruthyValues } from "@/libs/funcs";
import { revalidate } from "@/libs/revalidate";

import { CreateSessionSchema, CreateSessionSchemaType } from "@/validators/sessions";

import useTiptapContent from "@/hooks/useTiptapContent";

import TextField from "../../TextField";
import Checkbox from "../../Checkbox";

import { TiptapLoading } from "@/components/ui/editor/Tiptap";
import Button from "@/components/ui/Button";

const Tiptap = dynamic(() => import("@/components/ui/editor/Tiptap"), { ssr: false, loading: TiptapLoading });

import { LimitedTopic } from "@/types/topic.types";

type CreateSessionFormProps = { topic: LimitedTopic; slug: string; onClose: () => void };

function CreateSessionForm({ topic, slug, onClose }: CreateSessionFormProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        setValue,
        reset,
    } = useForm<CreateSessionSchemaType>({
        values: {
            title: "",
            topic: topic?._id,
            course: topic?.course,
            video: "",
            content: "",
            time: "",
            isPublic: false,
            attached: "",
        },
        resolver: zodResolver(CreateSessionSchema),
    });

    const submitHandler = async (data: CreateSessionSchemaType) => {
        const body = getTruthyValues(data) as CreateSessionSchemaType;

        const res = await createSession(body);

        statusHandler(res, CreateSessionStatusOptions);

        if (res.success) {
            revalidate(coursesCache.getOne(slug), coursesCache.getTopics(slug));
            onClose();
            reset();
            router.refresh();
        }
    };

    const onSaveContent = useTiptapContent(setValue, "content");

    return (
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="title" label="عنوان جلسه" placeholder="عنوان جلسه را وارد کنید" />
            <TextField control={control} name="video" label="آدرس ویدیو جلسه" placeholder="آدرس ویدیو جلسه را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-8">
                <TextField control={control} name="time" label="زمان جلسه" placeholder="زمان جلسه را وارد کنید" caption="زمان جلسه را با فرمت xx:xx وارد کنید" className="w-full" />
                <TextField control={control} name="attached" label="آدرس پیوست جلسه ( اختیاری )" placeholder="آدرس پیوست جلسه را وارد کنید" className="w-full" />
            </div>
            <div className="space-y-2">
                <span className="font-pelak-medium text-sm text-gray-800 dark:text-gray-200">توضیحات جلسه ( اختیاری )</span>
                <Tiptap onSave={onSaveContent} />
            </div>
            <Checkbox control={control} name="isPublic" label="جلسه رایگان" caption="در صورت فعال بودن این گزینه این جلسه برای همه قابل مشاهده خواهد بود" />
            <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="w-full sm:w-max" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ایجاد جلسه جدید" : "ایجاد جلسه جدید"}
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full sm:w-max" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </div>
        </form>
    );
}

export default CreateSessionForm;
