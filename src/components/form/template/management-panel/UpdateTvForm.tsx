"use client";

import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";

import { tv as tvCache } from "@/api/cache/tags";
import { getCategoriesSummary } from "@/api/queries/categories";
import { updateTv } from "@/api/mutations/tv";
import { UpdateTvStatusOptions } from "@/api/errors/tv";

import { REFERENCES } from "@/constants/categories";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";
import { getTruthyValues } from "@/libs/funcs";

import { CreateTvSchema, CreateTvSchemaType } from "@/validators/tv";

import useTiptapContent from "@/hooks/useTiptapContent";

import TextArea from "../../TextArea";
import TextField from "../../TextField";
import Select, { SelectItem } from "../../Select";
import Checkbox from "../../Checkbox";

import { TiptapLoading } from "@/components/ui/editor/Tiptap";
import Button from "@/components/ui/Button";

const Tiptap = dynamic(() => import("@/components/ui/editor/Tiptap"), { ssr: false, loading: TiptapLoading });

import { Tv } from "@/types/tv.types";

type UpdateTvFormProps = { tv: Tv };

function UpdateTvForm({ tv }: UpdateTvFormProps) {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        setValue,
    } = useForm<CreateTvSchemaType>({
        defaultValues: {
            title: tv.title,
            description: tv.description,
            slug: tv.slug,
            category: tv.category._id,
            cover: tv.cover,
            video: tv.video,
            content: tv.content,
            shown: tv.shown,
        },
        resolver: zodResolver(CreateTvSchema),
    });

    const { data } = useQuery({
        queryKey: ["categories-summary-tv"],
        queryFn: () => getCategoriesSummary({ ref: REFERENCES.TV }),
    });

    const submitHandler = async (data: CreateTvSchemaType) => {
        const body = getTruthyValues(data) as CreateTvSchemaType;

        const res = await updateTv({ tvId: tv._id }, body);

        statusHandler(res, UpdateTvStatusOptions);

        if (res.success) {
            revalidate(tvCache.default, tvCache.getOne(tv.slug), tvCache.getRelated(tv.slug));
        }
    };

    const onSaveContent = useTiptapContent(setValue, "content");

    return (
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="title" label="عنوان آموزش" placeholder="عنوان آموزش را وارد کنید" />
            <TextArea control={control} name="description" label="توضیحات کوتاه آموزش" placeholder="توضیحات کوتاه آموزش را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-8">
                <TextField control={control} name="slug" label="شناسه آموزش" placeholder="شناسه آموزش را وارد کنید" className="w-full" caption="برای ایجاد شناسه از حروف لاتین استفاده کنید" />
                <Select control={control} name="category" label="دسته‌بندی آموزش" defaultText={tv.category.title} className="w-full">
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
            <div className="space-y-2">
                <span className="font-pelak-medium text-sm text-gray-800 dark:text-gray-200">توضیحات کامل آموزش ( اختیاری )</span>
                <Tiptap onSave={onSaveContent} content={tv.content ? JSON.parse(tv.content) : undefined} store={{ key: `tiptap:update-tv:${tv._id}` }} />
            </div>
            <TextField control={control} name="attached" label="آدرس پیوست آموزش ( اختیاری )" placeholder="آدرس پیوست آموزش را وارد کنید" />
            <Checkbox control={control} name="shown" label="نمایش بلافاصله آموزش" caption="در صورت فعال بودن این گزینه آموزش در صفحه اصلی نمایش داده خواهد شد" />
            <Button type="submit" size="lg" className="w-max" disabled={isSubmitting}>
                {isSubmitting ? "در حال ویرایش آموزش" : "ویرایش آموزش"}
            </Button>
        </form>
    );
}

export default UpdateTvForm;
