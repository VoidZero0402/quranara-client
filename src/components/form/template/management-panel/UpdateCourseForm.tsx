"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { courses as coursesCache } from "@/api/cache/tags";
import { updateCourse } from "@/api/mutations/courses";
import { UpdateCourseStatusOptions } from "@/api/errors/courses";

import { STATUS, StatusText } from "@/constants/courses";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";
import { formatPrice, getTruthyValues } from "@/libs/funcs";

import { UpdateCourseSchema, UpdateCourseSchemaType } from "@/validators/courses";

import TextArea from "../../TextArea";
import TextField from "../../TextField";
import NumericField from "../../NumericField";
import Select, { SelectItem } from "../../Select";
import Checkbox from "../../Checkbox";

import Button from "@/components/ui/Button";

import { Course } from "@/types/course.types";

type UpdateCourseFormProps = { course: Course };

function UpdateCourseForm({ course }: UpdateCourseFormProps) {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        watch,
    } = useForm<UpdateCourseSchemaType>({
        defaultValues: {
            title: course.title,
            description: course.description,
            slug: course.slug,
            cover: course.cover,
            price: course.price,
            status: course.status,
            introduction: course.introduction,
            metadata: course.metadata,
            shown: course.shown,
            discount: course.discount ?? 0,
        },
        resolver: zodResolver(UpdateCourseSchema),
    });

    const submitHandler = async (data: UpdateCourseSchemaType) => {
        const body = getTruthyValues(data) as UpdateCourseSchemaType;

        const res = await updateCourse({ courseId: course._id }, body);

        statusHandler(res, UpdateCourseStatusOptions);

        if (res.success) {
            revalidate(coursesCache.default, coursesCache.getOne(course.slug));
        }
    };

    const price = watch("price");

    return (
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="title" label="عنوان دوره" placeholder="عنوان دوره را وارد کنید" />
            <TextArea control={control} name="description" label="توضیحات کوتاه دوره" placeholder="توضیحات کوتاه دوره را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-8">
                <TextField control={control} name="cover" label="آدرس کاور دوره" placeholder="آدرس کاور دوره را وارد کنید" className="w-full" />
                <Select control={control} name="status" label="وضعیت دوره" defaultText={StatusText[course.status]} className="w-full">
                    <SelectItem value={STATUS.PRE_SELL} text={StatusText[STATUS.PRE_SELL]}>
                        {StatusText[STATUS.PRE_SELL]}
                    </SelectItem>
                    <SelectItem value={STATUS.ON_PERFORMING} text={StatusText[STATUS.ON_PERFORMING]}>
                        {StatusText[STATUS.ON_PERFORMING]}
                    </SelectItem>
                    <SelectItem value={STATUS.REACHED} text={StatusText[STATUS.REACHED]}>
                        {StatusText[STATUS.REACHED]}
                    </SelectItem>
                </Select>
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
                <TextField control={control} name="slug" label="شناسه دوره" placeholder="شناسه دوره را وارد کنید" className="w-full" caption="برای ویرایش شناسه از حروف لاتین استفاده کنید" />
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
            <div className="flex flex-col sm:flex-row gap-8">
                <TextField control={control} name="introduction.video" label="آدرس ویدیو معرفی ( اختیاری )" placeholder="آدرس ویدیو معرفی دوره را وارد کنید" className="w-full" />
                <NumericField control={control} name="discount" label="تخفیف دوره ( اختیاری )" placeholder="تخفیف دوره را وارد کنید" className="w-full" caption="تخفیف را بر حسب درصد وارد کنید" />
            </div>
            <TextArea control={control} name="introduction.content" label="توضیحات کامل دوره ( اختیاری )" placeholder="توضیحات کامل دوره را وارد کنید" />
            <Checkbox control={control} name="shown" label="نمایش بلافاصله دوره" caption="در صورت فعال بودن این گزینه دوره در صفحه اصلی نمایش داده خواهد شد" />
            <Button type="submit" size="lg" className="w-max" disabled={isSubmitting}>
                {isSubmitting ? "در حال ویرایش دوره" : "ویرایش دوره"}
            </Button>
        </form>
    );
}

export default UpdateCourseForm;
