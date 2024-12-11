"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { createOrder } from "@/api/mutations/orders";
import { CreateOrderStatusOptions } from "@/api/errors/orders";

import { statusHandler } from "@/libs/responses";

import Checkbox from "@/components/form/Checkbox";

import Button from "@/components/ui/Button";

import { Discount } from "@/types/discount.types";

type PaymentForm = { terms: boolean };

type PaymentButtonProps = { discount: Discount | undefined };

function PaymentButton({ discount }: PaymentButtonProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        watch,
    } = useForm<PaymentForm>({
        defaultValues: {
            terms: false,
        },
    });

    const handleOrder = useCallback(async () => {        
        const res = await createOrder({ discountCode: discount?.code });

        statusHandler(res, CreateOrderStatusOptions);

        if (res.success) {
            router.push(res.data.paymentUrl);
        }
    }, [discount]);

    const isAgree = watch("terms");

    return (
        <form className="space-y-4" onSubmit={handleSubmit(handleOrder)}>
            <div className="flex items-center gap-1">
                <Checkbox control={control} name="terms" label="با قوانین قرآن‌آرا موافقم" checkboxClassName="dark:bg-gray-850" />
                <Link href="#" className="font-pelak-semibold text-xs text-blue-500">
                    ( مشاهده قوانین )
                </Link>
            </div>
            <Button size="lg" className="w-full" disabled={!isAgree || isSubmitting}>
                {isSubmitting ? "آماده سازی درگاه پرداخت" : "پراخت آنلاین و تکمیل خرید"}
            </Button>
        </form>
    );
}

export default PaymentButton;
