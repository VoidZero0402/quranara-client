"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { removeDiscount } from "@/api/mutations/discounts";
import { RemoveDiscountStatusOptions } from "@/api/errors/discounts";

import { statusHandler } from "@/libs/responses";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "../../Modal";

import Button from "@/components/ui/Button";

import Trash from "@/components/svgs/Trash";

import { Discount } from "@/types/discount.types";

type RemoveDiscountModalProps = ModalInstanceProps & { discount: Pick<Discount, "_id" | "code"> };

function RemoveDiscountModal({ isOpen, onClose, discount }: RemoveDiscountModalProps) {
    const router = useRouter();

    const { mutate: remove, isPending } = useMutation({
        mutationFn: () => removeDiscount({ discountId: discount._id }),
        async onSettled(data) {
            if (data) {
                statusHandler(data, RemoveDiscountStatusOptions);

                if (data.success) {
                    onClose();
                    router.refresh();
                }
            }
        },
    });

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <Trash />
                    حذف کردن کد تخفیف
                </div>
            </ModalHeader>
            <ModalBody className="space-y-4 min-h-72">
                <div className="space-y-2">
                    <span className="font-pelak-semibold text-red-500 leading-8">آیا از حذف کردن کد تخفیف اطمینان دارید؟</span>
                    <p className="text-gray-600 dark:text-gray-400 leading-8">با حذف کد تخفیف، کد تخفیف برای همیشه از دیتابیس حذف شده و غیر قابل بازگردانی است</p>
                </div>
                {discount && (
                    <p className="text-gray-700 dark:text-gray-300 leading-8">
                        در صورتی که از حذف کد تخفیف با شناسه <span className="font-pelak-medium text-amber-400 underline">{discount.code}</span> اطمینان دارید روی حذف کد تخفیف کلیک کنید
                    </p>
                )}
            </ModalBody>
            <ModalFooter className="flex-col sm:flex-row gap-4">
                <Button size="lg" variant="filled-danger" className="w-full" disabled={isPending} onClick={remove as any}>
                    {isPending ? "در حال حذف  کد تخفیف مدنظر" : "حذف  کد تخفیف مدنظر"}
                </Button>
                <Button size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default RemoveDiscountModal;
