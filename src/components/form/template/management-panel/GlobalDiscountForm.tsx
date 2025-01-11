"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { applyDiscountAll } from "@/api/mutations/courses";
import { ApplyDiscountAllStatusOptions } from "@/api/errors/discounts";

import { statusHandler } from "@/libs/responses";
import { revalidateCoursesCache } from "@/libs/apis";

import { DiscountAllSchema, DiscountAllSchemaType } from "@/validators/courses";

import NumericField from "../../NumericField";

import Button from "@/components/ui/Button";

type GlobalDiscountFormProps = { onClose: () => void };

function GlobalDiscountForm({ onClose }: GlobalDiscountFormProps) {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<DiscountAllSchemaType>({
        defaultValues: {
            discount: "" as any,
        },
        resolver: zodResolver(DiscountAllSchema),
    });

    const submitHandler = async (data: DiscountAllSchemaType) => {
        const res = await applyDiscountAll(data);

        statusHandler(res, ApplyDiscountAllStatusOptions);

        if (res.success) {
            revalidateCoursesCache();
            reset();
            onClose();
        }
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <NumericField control={control} name="discount" label="میزان تخفیف" placeholder="میزان تخفیف را به درصد وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "در حال اعمال تخفیف همگانی" : "اعمال تخفیف همگانی"}
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </div>
        </form>
    );
}

export default GlobalDiscountForm;
