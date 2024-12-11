"use client";

import { useForm } from "react-hook-form";

import Checkbox from "@/components/form/Checkbox";

import Button from "@/components/ui/Button";
import Link from "next/link";

type PaymentForm = { terms: boolean };

function PaymentButton() {
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

    const isAgree = watch("terms");

    return (
        <form className="space-y-4">
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
