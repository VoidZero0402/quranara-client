"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { removeFromCart } from "@/api/mutations/cart";
import { RemoveFormCartStatusOptions } from "@/api/errors/cart";

import { statusHandler } from "@/libs/responses";

type RemoveFromBasketButtonProps = { _id: string };

function RemoveFromBasketButton({ _id }: RemoveFromBasketButtonProps) {
    const router = useRouter();

    const { mutate: remove, isPending } = useMutation({
        mutationKey: [`remove-bascket-${_id}`],
        mutationFn: () => removeFromCart({ course: _id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, RemoveFormCartStatusOptions);

                if (data.success) {
                    router.refresh();
                }
            }
        },
    });

    return (
        <button className="md:absolute top-0 left-0 font-pelak-medium text-xs text-red-500" onClick={remove as any} disabled={isPending}>
            حذف از سبد خرید
        </button>
    );
}

export default RemoveFromBasketButton;
