"use client";

import { useMutation } from "@tanstack/react-query";

import { removeDiscountAll } from "@/api/mutations/courses";
import { RemoveDiscountAllStatusOptions } from "@/api/errors/discounts";

import { statusHandler } from "@/libs/responses";

import Button from "@/components/ui/Button";

import Refresh from "@/components/svgs/Refresh";

function ResetDiscounts() {
    const { mutate: reset, isPending } = useMutation({
        mutationFn: removeDiscountAll,
        onSettled(data) {
            if (data) {
                statusHandler(data, RemoveDiscountAllStatusOptions);
            }
        },
    });

    return (
        <div className="space-y-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
            <div className="space-y-2">
                <div className="flex items-center gap-x-1">
                    <Refresh />
                    حذف تمامی تخفیفات
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-8">در صورتی که نیاز دارید تخفیف تمامی دوره‌ها برداشته شود، می‌توانید روی حذف تمامی تخفیفات کلیک کنید</p>
            </div>
            <Button size="lg" variant="filled-danger" disabled={isPending} onClick={reset as any}>
                <Refresh />
                {isPending ? "در حال حذف تمامی تخفیفات" : "حذف تمامی تخفیفات"}
            </Button>
        </div>
    );
}

export default ResetDiscounts;
