"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";

import { tv } from "@/api/cache/tags";
import { getCategoriesSummary } from "@/api/queries/categories";
import { createTv } from "@/api/mutations/tv";
import { CreateTvStatusOptions } from "@/api/errors/tv";

import { REFERENCES } from "@/constants/categories";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";
import { getTruthyValues } from "@/libs/funcs";

import { CreateTvSchema, CreateTvSchemaType } from "@/validators/tv";

import TextArea from "../../TextArea";
import TextField from "../../TextField";
import Select, { SelectItem } from "../../Select";
import Checkbox from "../../Checkbox";

import Button from "@/components/ui/Button";

function CreateTvForm() {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<CreateTvSchemaType>({
        defaultValues: {
            title: "",
            description: "",
            slug: "",
            category: "",
            cover: "",
            video: "",
            content: "",
            shown: false,
        },
        resolver: zodResolver(CreateTvSchema),
    });

    const { data } = useQuery({
        queryKey: ["categories-summary-tv"],
        queryFn: () => getCategoriesSummary({ ref: REFERENCES.TV }),
    });

    const submitHandler = async (data: CreateTvSchemaType) => {
        const body = getTruthyValues(data) as CreateTvSchemaType;

        const res = await createTv(body);

        statusHandler(res, CreateTvStatusOptions);

        if (res.success) {
            revalidate(tv.default);
            reset();
        }
    };

    return (
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="title" label="عنوان آموزش" placeholder="عنوان آموزش را وارد کنید" />
            <TextArea control={control} name="description" label="توضیحات کوتاه آموزش" placeholder="توضیحات کوتاه آموزش را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-8">
                <TextField control={control} name="slug" label="شناسه آموزش" placeholder="شناسه آموزش را وارد کنید" className="w-full" caption="برای ایجاد شناسه از حروف لاتین استفاده کنید" />
                <Select control={control} name="category" label="دسته‌بندی آموزش" defaultText="لطفا دسته‌بندی را انتخاب کنید" className="w-full">
                    {data?.data.categories.map((category) => (
                        <SelectItem key={category._id} value={category._id} text={category.title}>
                            {category.title}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
                <TextField control={control} name="cover" label="آدرس کاور آموزش" placeholder="آدرس کاور آموزش را وارد کنید" className="w-full" />
                <TextField control={control} name="video" label="آدرس ویدیو آموزش" placeholder="آدرس ویدیو آموزش را وارد کنید" className="w-full" />
            </div>
            <TextArea control={control} name="content" label="توضیحات کامل آموزش ( اختیاری )" placeholder="توضیحات کامل آموزش را وارد کنید" />
            <TextField control={control} name="attached" label="آدرس پیوست آموزش ( اختیاری )" placeholder="آدرس پیوست آموزش را وارد کنید" />
            <Checkbox control={control} name="shown" label="نمایش بلافاصله آموزش" caption="در صورت فعال بودن این گزینه آموزش در صفحه اصلی نمایش داده خواهد شد" />
            <Button type="submit" size="lg" className="w-max" disabled={isSubmitting}>
                {isSubmitting ? "در حال ایجاد آموزش جدید" : "ایجاد آموزش جدید"}
            </Button>
        </form>
    );
}

export default CreateTvForm;
