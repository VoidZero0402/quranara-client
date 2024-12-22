"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createDiscount } from "@/api/mutations/discounts";
import { CreateDiscountStatusOptions } from "@/api/errors/discounts";

import { statusHandler } from "@/libs/responses";
import { getDateAfterHours } from "@/libs/funcs";

import { CreateDiscountSchema, CreateDiscountSchemaType } from "@/validators/discounts";

import TextField from "../../TextField";
import NumericField from "../../NumericField";

import Button from "@/components/ui/Button";

type CreateDiscountFormProps = { onClose: () => void };

function CreateDiscountForm({ onClose }: CreateDiscountFormProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
    } = useForm<CreateDiscountSchemaType>({
        defaultValues: {
            code: "",
            percent: "" as any,
            max: "" as any,
            expireAtTime: "" as any,
        },
        resolver: zodResolver(CreateDiscountSchema),
    });

    const submitHandler = async (data: CreateDiscountSchemaType) => {
        const expireAtTime = getDateAfterHours(data.expireAtTime);

        const res = await createDiscount({ ...data, expireAtTime });

        statusHandler(res, CreateDiscountStatusOptions);

        if (res.status === 201) {
            reset();
            onClose();
            router.refresh();
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="code" label="کد تخفیف" placeholder="کد تخفیف را وارد کنید" caption="کد تخفیف باید ترکیبی از حروف و اعداد لاتین باشد" />
            <div className="flex flex-col sm:flex-row gap-4">
                <NumericField control={control} name="percent" label="درصد تخفیف" placeholder="درصد تخفیف را وارد کنید" className="w-full" />
                <NumericField control={control} name="max" label="تعداد قابل استفاده" placeholder="تعداد قابل استفاده را وارد کنید" className="w-full" />
            </div>
            <NumericField control={control} name="expireAtTime" label="تاریخ انقضا" placeholder="مقدار زمانی که کد قابل مصرف است" caption="مقدار این فیلد بر اساس ساعت محاسبه می‌شود" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ایجاد کد تخفیف" : "ایجاد کد تخفیف"}
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </div>
        </form>
    );
}

export default CreateDiscountForm;
