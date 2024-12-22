"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { updateDiscount } from "@/api/mutations/discounts";
import { UpdateDiscountStatusOptions } from "@/api/errors/discounts";

import { statusHandler } from "@/libs/responses";
import { getDateAfterHours } from "@/libs/funcs";

import { UpdateDiscountSchema, UpdateDiscountSchemaType } from "@/validators/discounts";

import TextField from "../../TextField";
import NumericField from "../../NumericField";

import Button from "@/components/ui/Button";
import { Discount } from "@/types/discount.types";

type UpdateDiscountFormProps = { discount: Discount; onClose: () => void };

function UpdateDiscountForm({ discount, onClose }: UpdateDiscountFormProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<UpdateDiscountSchemaType>({
        values: {
            code: discount?.code ?? "",
            percent: discount?.percent ?? "",
            max: discount?.max ?? "",
            expireAtTime: "" as any,
        },
        resolver: zodResolver(UpdateDiscountSchema),
    });

    const submitHandler = async (data: UpdateDiscountSchemaType) => {
        const expireAtTime = data.expireAtTime && getDateAfterHours(data.expireAtTime);

        const res = await updateDiscount({ discountId: discount._id }, { ...data, expireAtTime });

        statusHandler(res, UpdateDiscountStatusOptions);

        if (res.status === 200) {
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
            <NumericField control={control} name="expireAtTime" label="تاریخ انقضا" placeholder="مقدار زمانی که کد قابل مصرف است" caption="مقدار این فیلد بر اساس ساعت محاسبه می‌شود، دقت کنید این زمان از زمان حال محاسبه می‌شود" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ویرایش کد تخفیف" : "ویرایش کد تخفیف"}
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </div>
        </form>
    );
}

export default UpdateDiscountForm;
