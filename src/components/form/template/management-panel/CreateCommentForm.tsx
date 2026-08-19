"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { courses as coursesCache } from "@/api/cache/tags";
import { createCommentExternal } from "@/api/mutations/comments";
import { CreateCommentExternalStatusOptions } from "@/api/errors/comments";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";

import { CreateCommentExtenalSchema, CreateCommentExtenalSchemaType } from "@/validators/comments";

import TextArea from "../../TextArea";
import TextField from "../../TextField";

import Button from "@/components/ui/Button";

import { CourseIdentifiers } from "@/types/course.types";

type CreateCommentFormProps = { course: CourseIdentifiers; onClose: () => void };

function CreateCommentForm({ course, onClose }: CreateCommentFormProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<CreateCommentExtenalSchemaType>({
        values: {
            username: "",
            content: "",
        },
        resolver: zodResolver(CreateCommentExtenalSchema),
    });

    const submitHandler = async (data: CreateCommentExtenalSchemaType) => {
        const res = await createCommentExternal({ ...data, course: course._id });

        statusHandler(res, CreateCommentExternalStatusOptions);

        if (res.success) {
            revalidate(coursesCache.getComments(course.slug));
            reset();
            onClose();
            router.refresh();
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="username" label="نام کاربر" placeholder="نام کاربر را وارد کنید" />
            <TextArea control={control} name="content" label="محتوای نظر" placeholder="محتوای نظر را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ایجاد نظر جدید" : "ایجاد نظر جدید"}
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </div>
        </form>
    );
}

export default CreateCommentForm;
