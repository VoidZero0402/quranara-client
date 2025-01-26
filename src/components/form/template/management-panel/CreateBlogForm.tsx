"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { blog } from "@/api/cache/tags";
import { getCategoriesSummary } from "@/api/queries/categories";
import { getCoursesSummary } from "@/api/queries/courses";
import { createBlog } from "@/api/mutations/blog";
import { CreateBlogStatusOptions } from "@/api/errors/blog";

import { REFERENCES } from "@/constants/categories";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";

import { CreateBlogSchema, CreateBlogSchemaType } from "@/validators/blog";

import useTiptapBlogContent from "@/hooks/useTiptapBlogContent";

import TextArea from "../../TextArea";
import TextField from "../../TextField";
import Select, { SelectItem } from "../../Select";
import MultiSelect from "../../MultiSelect";
import Checkbox from "../../Checkbox";

import { TiptapLoading } from "@/components/ui/editor/Tiptap";
import Button from "@/components/ui/Button";

const Tiptap = dynamic(() => import("@/components/ui/editor/Tiptap"), { ssr: false, loading: TiptapLoading });

function CreateBlogForm() {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        setValue,
    } = useForm<CreateBlogSchemaType>({
        defaultValues: {
            title: "",
            description: "",
            slug: "",
            cover: "",
            category: "",
            content: "",
            headings: [],
            relatedCourses: [],
            shown: false,
        },
        resolver: zodResolver(CreateBlogSchema),
    });

    const { data } = useQuery({
        queryKey: ["categories-summary-blog"],
        queryFn: () => getCategoriesSummary({ ref: REFERENCES.BLOG }),
    });

    const { data: coursesSummary } = useQuery({
        queryKey: ["courses-summary"],
        queryFn: getCoursesSummary,
    });

    const relatedCoursesOptions = useMemo(() => coursesSummary?.data.courses.map((course) => ({ value: course._id, text: course.title })) ?? [], [coursesSummary]);

    const submitHandler = async (data: CreateBlogSchemaType) => {
        const res = await createBlog(data);

        statusHandler(res, CreateBlogStatusOptions);

        if (res.success) {
            revalidate(blog.default);
        }
    };

    const onSaveContent = useTiptapBlogContent(setValue);

    return (
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="title" label="عنوان مقاله" placeholder="عنوان مقاله را وارد کنید" />
            <TextArea control={control} name="description" label="توضیحات کوتاه مقاله" placeholder="توضیحات کوتاه مقاله را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-8">
                <TextField control={control} name="slug" label="شناسه مقاله" placeholder="شناسه مقاله را وارد کنید" className="w-full" caption="برای ایجاد شناسه از حروف لاتین استفاده کنید" />
                <Select control={control} name="category" label="دسته‌بندی مقاله" defaultText="لطفا دسته‌بندی را انتخاب کنید" className="w-full">
                    {data?.data.categories.map((category) => (
                        <SelectItem key={category._id} value={category._id} text={category.title}>
                            {category.title}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
                <TextField control={control} name="cover" label="آدرس کاور مقاله" placeholder="آدرس کاور مقاله را وارد کنید" className="w-full" />
                <MultiSelect control={control} name="relatedCourses" label="دوره‌های مرتبط" placeholder="لطفا دوره‌های مرتبط را انتخاب کنید" options={relatedCoursesOptions} selectedText="$ دوره مرتبط انتخاب شده" className="w-full" />
            </div>
            <div className="space-y-2">
                <span className="font-pelak-medium text-sm text-gray-800 dark:text-gray-200">محتوای مقاله</span>
                <Tiptap onSave={onSaveContent} source="blog" store={{ key: "tiptap:create-blog" }} />
            </div>
            <Checkbox control={control} name="shown" label="نمایش بلافاصله مقاله" caption="در صورت فعال بودن این گزینه مقاله در صفحه اصلی نمایش داده خواهد شد" />
            <Button type="submit" size="lg" className="w-max" disabled={isSubmitting}>
                {isSubmitting ? "در حال ایجاد مقاله جدید" : "ایجاد مقاله جدید"}
            </Button>
        </form>
    );
}

export default CreateBlogForm;
