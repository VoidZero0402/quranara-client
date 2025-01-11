"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { news as newsCache } from "@/api/cache/tags";
import { updateNews } from "@/api/mutations/news";
import { UpdateNewsStatusOptions } from "@/api/errors/news";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";

import { UpdateNewsSchema, UpdateNewsSchemaType } from "@/validators/news";

import TextArea from "../../TextArea";
import TextField from "../../TextField";

import Button from "@/components/ui/Button";

import { News } from "@/types/news.types";

type UpdateNewsFormProps = { news: News };

function UpdateNewsForm({ news }: UpdateNewsFormProps) {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<UpdateNewsSchemaType>({
        defaultValues: {
            title: news.title,
            description: news.description,
            cover: news.cover,
            link: news.link ?? {
                text: "",
                url: "",
            },
        },
        resolver: zodResolver(UpdateNewsSchema),
    });

    const submitHandler = async (data: UpdateNewsSchemaType) => {
        const res = await updateNews({ newsId: news._id }, { ...data, link: data.link?.text ? data.link : undefined });

        statusHandler(res, UpdateNewsStatusOptions);

        if (res.success) {
            revalidate(newsCache.default);
        }
    };

    return (
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="title" label="عنوان خبر" placeholder="عنوان خبر را وارد کنید" />
            <TextArea control={control} name="description" label="توضیحات خبر" placeholder="توضیحات خبر را وارد کنید" />
            <TextField control={control} name="cover" label="آدرس کاور" placeholder="آدرس کاور را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-8">
                <TextField control={control} name="link.text" label="عنوان لینک ( اختیاری )" placeholder="عنوان لینک را وارد کنید" className="w-full" caption="در صورت وارد کردن عنوان لینک باید آدرس لینک را هم وارد کنید" />
                <TextField control={control} name="link.url" label="آدرس لینک ( اختیاری )" placeholder="آدرس لینک را وارد کنید" className="w-full" />
            </div>
            <Button type="submit" size="lg" className="w-max" disabled={isSubmitting}>
                {isSubmitting ? "در حال ویرایش خبر" : "ویرایش خبر"}
            </Button>
        </form>
    );
}

export default UpdateNewsForm;
