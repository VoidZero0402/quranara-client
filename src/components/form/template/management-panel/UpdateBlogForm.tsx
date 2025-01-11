"use client";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { blog as blogCache } from "@/api/cache/tags";
import { getCategoriesSummary } from "@/api/queries/categories";
import { getCoursesSummary } from "@/api/queries/courses";
import { updateBlog } from "@/api/mutations/blog";
import { UpdateBlogStatusOptions } from "@/api/errors/blog";

import { REFERENCES } from "@/constants/categories";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";

import { CreateBlogSchema, CreateBlogSchemaType } from "@/validators/blog";

import TextArea from "../../TextArea";
import TextField from "../../TextField";
import Select, { SelectItem } from "../../Select";
import MultiSelect from "../../MultiSelect";
import Checkbox from "../../Checkbox";

import Button from "@/components/ui/Button";

import { Blog } from "@/types/blog.types";

type UpdateBlogFormProps = {
    blog: Blog;
};

function UpdateBlogForm({ blog }: UpdateBlogFormProps) {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<CreateBlogSchemaType>({
        defaultValues: {
            title: blog.title,
            description: blog.description,
            slug: blog.slug,
            cover: blog.cover,
            category: blog.category._id,
            content: blog.content,
            relatedCourses: blog.relatedCourses as unknown as string[],
            shown: blog.shown,
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
        const res = await updateBlog({ blogId: blog._id }, data);

        statusHandler(res, UpdateBlogStatusOptions);

        if (res.success) {
            revalidate(blogCache.default, blogCache.getOne(blog.slug), blogCache.getRelated(blog.slug));
        }
    };

    return (
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="title" label="عنوان مقاله" placeholder="عنوان مقاله را وارد کنید" />
            <TextArea control={control} name="description" label="توضیحات کوتاه مقاله" placeholder="توضیحات کوتاه مقاله را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-8">
                <TextField control={control} name="slug" label="شناسه مقاله" placeholder="شناسه مقاله را وارد کنید" className="w-full" caption="برای ایجاد شناسه از حروف لاتین استفاده کنید" />
                <Select control={control} name="category" label="دسته‌بندی مقاله" defaultText={blog.category.title} className="w-full">
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
            <TextArea control={control} name="content" label="محتوای مقاله" placeholder="محتوای مقاله را وارد کنید" />
            <Checkbox control={control} name="shown" label="نمایش بلافاصله مقاله" caption="در صورت فعال بودن این گزینه مقاله در صفحه اصلی نمایش داده خواهد شد" />
            <Button type="submit" size="lg" className="w-max" disabled={isSubmitting}>
                {isSubmitting ? "در حال ویرایش مقاله" : "ویرایش مقاله"}
            </Button>
        </form>
    );
}

export default UpdateBlogForm;
