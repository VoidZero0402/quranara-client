"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { category as categoryCache, ui } from "@/api/cache/tags";
import { updateCategory } from "@/api/mutations/categories";
import { UpdateCategoryStatusOptions } from "@/api/errors/categories";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";

import { UpdateCategorySchema, UpdateCategorySchemaType } from "@/validators/categories";

import TextArea from "../../TextArea";
import TextField from "../../TextField";

import Button from "@/components/ui/Button";

import { Category } from "@/types/category.types";

type UpdateCategoryFormProps = { category: Category; onClose: () => void };

function UpdateCategoryForm({ category, onClose }: UpdateCategoryFormProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<UpdateCategorySchemaType>({
        values: {
            title: category?.title ?? "",
            caption: category?.caption ?? "",
        },
        resolver: zodResolver(UpdateCategorySchema),
    });

    const submitHandler = async (data: UpdateCategorySchemaType) => {
        const res = await updateCategory({ categoryId: category._id }, data);

        statusHandler(res, UpdateCategoryStatusOptions);

        if (res.success) {
            await revalidate(categoryCache.default, ui.menus);
            reset();
            onClose();
            router.refresh();
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="title" label="عنوان دسته‌بندی" placeholder="عنوان دسته‌بندی را وارد کنید" />
            <TextArea control={control} name="caption" label="توضیحات کوتاه دسته‌بندی" placeholder="توضیحات کوتاه دسته‌بندی را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ویرایش دسته‌بندی" : "ویرایش دسته‌بندی"}
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </div>
        </form>
    );
}

export default UpdateCategoryForm;
