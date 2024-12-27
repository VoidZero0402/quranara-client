"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { category, ui } from "@/api/cache/tags";
import { createCategory } from "@/api/mutations/categories";
import { CreateCategoryStatusOptions } from "@/api/errors/categories";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";

import { REFERENCES } from "@/constants/categories";

import { CreateCategorySchema, CreateCategorySchemaType } from "@/validators/categories";

import TextArea from "../../TextArea";
import TextField from "../../TextField";
import Select, { SelectItem } from "../../Select";

import Button from "@/components/ui/Button";

type CreateNewCategoryFormProps = { onClose: () => void };

function CreateNewCategoryForm({ onClose }: CreateNewCategoryFormProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<CreateCategorySchemaType>({
        defaultValues: {
            title: "",
            caption: "",
        },
        resolver: zodResolver(CreateCategorySchema),
    });

    const submitHandler = async (data: CreateCategorySchemaType) => {
        const res = await createCategory(data);

        statusHandler(res, CreateCategoryStatusOptions);

        if (res.success) {
            await revalidate(category.default, ui.menus);
            reset();
            onClose();
            router.refresh();
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
            <Select control={control} name="ref" label="منبع دسته‌بندی" placeholder="لطفا یک منبع را انتخاب کنید">
                <SelectItem value={REFERENCES.BLOG} text="دسته‌بندی مقالات">
                    دسته‌بندی مقالات
                </SelectItem>
                <SelectItem value={REFERENCES.TV} text="دسته‌بندی آموزش‌ها">
                    دسته‌بندی آموزش‌ها
                </SelectItem>
                <SelectItem value={REFERENCES.DISCUSSION} text="دسته‌بندی بحث و گفتگو">
                    دسته‌بندی بحث و گفتگو
                </SelectItem>
            </Select>
            <TextField control={control} name="title" label="عنوان دسته‌بندی" placeholder="عنوان دسته‌بندی را وارد کنید" />
            <TextArea control={control} name="caption" label="توضیحات کوتاه دسته‌بندی" placeholder="توضیحات کوتاه دسته‌بندی را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ایجاد دسته‌بندی" : "ایجاد دسته‌بندی"}
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </div>
        </form>
    );
}

export default CreateNewCategoryForm;
