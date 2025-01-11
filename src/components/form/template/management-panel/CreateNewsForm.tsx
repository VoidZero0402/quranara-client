"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { news } from "@/api/cache/tags";
import { createNews } from "@/api/mutations/news";
import { CreateNewsStatusOptions } from "@/api/errors/news";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";

import { CreateNewsSchema, CreateNewsSchemaType } from "@/validators/news";

import TextArea from "../../TextArea";
import TextField from "../../TextField";
import Checkbox from "../../Checkbox";

import Button from "@/components/ui/Button";

function CreateNewsForm() {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<CreateNewsSchemaType>({
        defaultValues: {
            title: "",
            description: "",
            cover: "",
            link: {
                text: "",
                url: "",
            },
            shown: false,
        },
        resolver: zodResolver(CreateNewsSchema),
    });

    const submitHandler = async (data: CreateNewsSchemaType) => {
        const res = await createNews({ ...data, link: data.link?.text ? data.link : undefined });

        statusHandler(res, CreateNewsStatusOptions);

        if (res.success) {
            revalidate(news.default);
            reset();
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
            <Checkbox control={control} name="shown" label="نمایش بلافاصله خبر" caption="در صورت فعال بودن این گزینه خبر در صفحه اصلی نمایش داده خواهد شد" />
            <Button type="submit" size="lg" className="w-max" disabled={isSubmitting}>
                {isSubmitting ? "در حال ایجاد خبر جدید" : "ایجاد خبر جدید"}
            </Button>
        </form>
    );
}

export default CreateNewsForm;
