"use client";

import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { JSONContent } from "@tiptap/react";

import { courses } from "@/api/cache/tags";
import { createCourse } from "@/api/mutations/courses";
import { CreateCourseStatusOptions } from "@/api/errors/courses";

import { STATUS, StatusText } from "@/constants/courses";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";
import { formatPrice, getTruthyValues } from "@/libs/funcs";

import { CreateCourseSchema, CreateCourseSchemaType } from "@/validators/courses";

import TextArea from "../../TextArea";
import TextField from "../../TextField";
import NumericField from "../../NumericField";
import Select, { SelectItem } from "../../Select";
import Checkbox from "../../Checkbox";

import Tiptap from "@/components/ui/editor/Tiptap";
import Button from "@/components/ui/Button";

function CreateCourseForm() {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        setValue,
        watch,
        reset,
    } = useForm<CreateCourseSchemaType>({
        defaultValues: {
            title: "",
            description: "",
            slug: "",
            cover: "",
            price: 0,
            status: STATUS.PRE_SELL,
            introduction: {
                video: "",
                content: "",
            },
            metadata: {
                hours: "" as any,
                preRequisite: "",
                present: "",
                support: "",
            },
            shown: false,
        },
        resolver: zodResolver(CreateCourseSchema),
    });

    const submitHandler = async (data: CreateCourseSchemaType) => {
        const body = getTruthyValues(data) as CreateCourseSchemaType;

        const res = await createCourse(body);

        statusHandler(res, CreateCourseStatusOptions);

        if (res.success) {
            revalidate(courses.default);
            reset();
        }
    };

    const onSaveContent = useCallback((content: JSONContent | null) => {
        setValue("introduction.content", JSON.stringify(content) ?? "", {
            shouldDirty: true,
            shouldTouch: true,
        });
    }, []);

    const price = watch("price");

    return (
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="title" label="عنوان دوره" placeholder="عنوان دوره را وارد کنید" />
            <TextArea control={control} name="description" label="توضیحات کوتاه دوره" placeholder="توضیحات کوتاه دوره را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-8">
                <TextField control={control} name="slug" label="شناسه دوره" placeholder="شناسه دوره را وارد کنید" className="w-full" caption="برای ایجاد شناسه از حروف لاتین استفاده کنید" />
                <Select control={control} name="status" label="وضعیت دوره" defaultText={StatusText[STATUS.PRE_SELL]} className="w-full">
                    <SelectItem value={STATUS.ON_PERFORMING} text={StatusText[STATUS.ON_PERFORMING]}>
                        {StatusText[STATUS.ON_PERFORMING]}
                    </SelectItem>
                    <SelectItem value={STATUS.PRE_SELL} text={StatusText[STATUS.PRE_SELL]}>
                        {StatusText[STATUS.PRE_SELL]}
                    </SelectItem>
                    <SelectItem value={STATUS.REACHED} text={StatusText[STATUS.REACHED]}>
                        {StatusText[STATUS.REACHED]}
                    </SelectItem>
                </Select>
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
                <TextField control={control} name="cover" label="آدرس کاور دوره" placeholder="آدرس کاور دوره را وارد کنید" className="w-full" />

                <NumericField control={control} name="price" label="قیمت دوره" placeholder="قیمت دوره را وارد کنید" className="w-full" caption={formatPrice(price as any)} />
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
                <NumericField control={control} name="metadata.hours" label="زمان تقریبی دروه به ساعت" placeholder="زمان تقریبی دوره را وارد کنید" className="w-full" />
                <TextField control={control} name="metadata.preRequisite" label="پیشنیازهای دوره" placeholder="پیشنیازهای دوره را وارد کنید" className="w-full" />
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
                <TextField control={control} name="metadata.present" label="نحوه ارائه" placeholder="نحوه ارائه دوره را وارد کنید" className="w-full" />
                <TextField control={control} name="metadata.support" label="روش پشتیبانی" placeholder="روش پشتیبانی دوره را وارد کنید" className="w-full" />
            </div>
            <TextField control={control} name="introduction.video" label="آدرس ویدیو معرفی ( اختیاری )" placeholder="آدرس ویدیو معرفی دوره را وارد کنید" className="w-full" />
            <div className="space-y-2">
                <span className="font-pelak-medium text-sm text-gray-800 dark:text-gray-200">توضیحات کامل دوره ( اختیاری )</span>
                <Tiptap onSave={onSaveContent} store={{ key: "tiptap:create-course" }} />
            </div>
            <TextArea control={control} name="introduction.content" label="توضیحات کامل دوره ( اختیاری )" placeholder="توضیحات کامل دوره را وارد کنید" />
            <Checkbox control={control} name="shown" label="نمایش بلافاصله دوره" caption="در صورت فعال بودن این گزینه دوره در صفحه اصلی نمایش داده خواهد شد" />
            <Button type="submit" size="lg" className="w-max" disabled={isSubmitting}>
                {isSubmitting ? "در حال ایجاد دوره جدید" : "ایجاد دوره جدید"}
            </Button>
        </form>
    );
}

export default CreateCourseForm;
