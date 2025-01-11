"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { courses as coursesCache } from "@/api/cache/tags";
import { updateTopic } from "@/api/mutations/topics";
import { UpdateTopicStatusOptions } from "@/api/errors/topics";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";

import { UpdateTopicSchema, UpdateTopicSchemaType } from "@/validators/topics";

import TextField from "../../TextField";

import Button from "@/components/ui/Button";

import { LimitedTopic } from "@/types/topic.types";

type UpdateTopicFormProps = { topic: LimitedTopic; slug: string; onClose: () => void };

function UpdateTopicForm({ topic, slug, onClose }: UpdateTopicFormProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<UpdateTopicSchemaType>({
        values: {
            title: topic?.title ?? "",
        },
        resolver: zodResolver(UpdateTopicSchema),
    });

    const submitHandler = async (data: UpdateTopicSchemaType) => {
        const res = await updateTopic({ topicId: topic._id }, data);

        statusHandler(res, UpdateTopicStatusOptions);

        if (res.success) {
            revalidate(coursesCache.getTopics(slug));
            reset();
            onClose();
            router.refresh();
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="title" label="عنوان سرفصل" placeholder="عنوان سرفصل را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ویرایش سرفصل" : "ویرایش سرفصل"}
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </div>
        </form>
    );
}

export default UpdateTopicForm;
