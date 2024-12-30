"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { courses as coursesCache } from "@/api/cache/tags";
import { createTopic } from "@/api/mutations/topics";
import { CreateTopicStatusOptions } from "@/api/errors/topics";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";

import { CreateTopicSchema, CreateTopicSchemaType } from "@/validators/topics";

import TextField from "../../TextField";

import Button from "@/components/ui/Button";

import { CourseIdentifiers } from "@/types/course.types";

type CreateTopicFormProps = { course: CourseIdentifiers; onClose: () => void };

function CreateTopicForm({ course, onClose }: CreateTopicFormProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<CreateTopicSchemaType>({
        values: {
            title: "",
            course: course?._id,
        },
        resolver: zodResolver(CreateTopicSchema),
    });

    const submitHandler = async (data: CreateTopicSchemaType) => {
        const res = await createTopic(data);

        statusHandler(res, CreateTopicStatusOptions);

        if (res.status === 201) {
            await revalidate(coursesCache.getTopics(course.slug));
            onClose();
            reset();
            router.refresh();
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="title" label="عنوان سرفصل" placeholder="عنوان سرفصل را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ایجاد سرفصل جدید" : "ایجاد سرفصل جدید"}
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </div>
        </form>
    );
}

export default CreateTopicForm;
