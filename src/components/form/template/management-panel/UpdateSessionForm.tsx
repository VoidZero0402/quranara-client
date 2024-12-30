"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { courses as coursesCache } from "@/api/cache/tags";
import { updateSession } from "@/api/mutations/sessions";
import { UpdateSessionStatusOptions } from "@/api/errors/sessions";

import { statusHandler } from "@/libs/responses";
import { getTruthyValues } from "@/libs/funcs";
import { revalidate } from "@/libs/revalidate";

import { UpdateSessionSchema, UpdateSessionSchemaType } from "@/validators/sessions";

import TextField from "../../TextField";
import Checkbox from "../../Checkbox";

import Button from "@/components/ui/Button";

import { PopulatedSession } from "@/types/session.types";

type UpdateSessionFormProps = { session: PopulatedSession; slug: string; onClose: () => void };

function UpdateSessionForm({ session, slug, onClose }: UpdateSessionFormProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<UpdateSessionSchemaType>({
        values: {
            title: session?.title ?? "",
            video: session?.video ?? "",
            time: session?.time ?? "",
            isPublic: session?.isPublic ?? false,
            attached: session?.attached ?? "",
        },
        resolver: zodResolver(UpdateSessionSchema),
    });

    const submitHandler = async (data: UpdateSessionSchemaType) => {
        const body = getTruthyValues(data) as UpdateSessionSchemaType;

        const res = await updateSession({ sessionId: session._id }, body);

        statusHandler(res, UpdateSessionStatusOptions);

        if (res.success) {
            await revalidate(coursesCache.getTopics(slug));
            onClose();
            router.refresh();
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="title" label="عنوان جلسه" placeholder="عنوان جلسه را وارد کنید" />
            <TextField control={control} name="video" label="آدرس ویدیو جلسه" placeholder="آدرس ویدیو جلسه را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-8">
                <TextField control={control} name="time" label="زمان جلسه" placeholder="زمان جلسه را وارد کنید" caption="زمان جلسه را با فرمت xx:xx وارد کنید" className="w-full" />
                <TextField control={control} name="attached" label="آدرس پیوست جلسه ( اختیاری )" placeholder="آدرس پیوست جلسه را وارد کنید" className="w-full" />
            </div>
            <Checkbox control={control} name="isPublic" label="جلسه رایگان" caption="در صورت فعال بودن این گزینه این جلسه برای همه قابل مشاهده خواهد بود" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ویرایش جلسه" : "ویرایش جلسه"}
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </div>
        </form>
    );
}

export default UpdateSessionForm;
