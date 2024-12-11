"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { availableDiscount } from "@/api/queries/discounts";
import { AvailableDiscountStatusOptions } from "@/api/errors/discounts";

import { AvailableDiscountQuerySchema, AvailableDiscountQuerySchemaType } from "@/validators/discounts";

import { statusHandler } from "@/libs/responses";

import TextField from "../../TextField";

import Button from "@/components/ui/Button";

import { Discount } from "@/types/discount.types";

type ApplyDiscountFormProps = { onChange: (discount: Discount) => void };

function ApplyDiscountForm({ onChange }: ApplyDiscountFormProps) {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<AvailableDiscountQuerySchemaType>({
        defaultValues: {
            code: "",
        },
        resolver: zodResolver(AvailableDiscountQuerySchema),
    });

    const submitHandler = async (data: AvailableDiscountQuerySchemaType) => {
        const res = await availableDiscount(data);

        statusHandler(res, AvailableDiscountStatusOptions);

        if (res.success) {
            onChange(res.data.discount);
            reset();
        }
    };

    return (
        <form className="relative" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="code" label="کد تخفیف دارید؟" placeholder="کد تخفیف را وارد کنید" className="grow" />
            <Button size="lg" className="absolute -left-2 top-7" disabled={isSubmitting}>
                اعمال تخفیف
            </Button>
        </form>
    );
}

export default ApplyDiscountForm;
