"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { removeNotification } from "@/api/mutations/notifications";
import { RemoveNotificationStatusOptions } from "@/api/errors/notifications";

import { statusHandler } from "@/libs/responses";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "../../Modal";

import Button from "@/components/ui/Button";

import Trash from "@/components/svgs/Trash";

import { Notification } from "@/types/notification.types";

type RemoveNewsModalProps = ModalInstanceProps & { notification: Pick<Notification, "_id" | "title"> };

function RemoveNotificationModal({ isOpen, onClose, notification }: RemoveNewsModalProps) {
    const router = useRouter();

    const { mutate: remove, isPending } = useMutation({
        mutationFn: () => removeNotification({ notificationId: notification._id }),
        async onSettled(data) {
            if (data) {
                statusHandler(data, RemoveNotificationStatusOptions);

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
                    حذف کردن اعلان
                </div>
            </ModalHeader>
            <ModalBody className="space-y-4 min-h-72">
                <div className="space-y-2">
                    <span className="font-pelak-semibold text-red-500 leading-8">آیا از حذف کردن اعلان اطمینان دارید؟</span>
                    <p className="text-gray-600 dark:text-gray-400 leading-8">با حذف اعلان اعلان برای همیشه از دیتابیس حذف شده و غیر قابل بازگردانی است</p>
                </div>
                {notification && (
                    <p className="text-gray-700 dark:text-gray-300 leading-8">
                        در صورتی که از حذف اعلان با عنوان <span className="font-pelak-medium text-amber-400 underline">{notification.title}</span> اطمینان دارید روی حذف اعلان کلیک کنید
                    </p>
                )}
            </ModalBody>
            <ModalFooter className="flex-col sm:flex-row gap-4">
                <Button size="lg" variant="filled-danger" className="w-full" disabled={isPending} onClick={remove as any}>
                    {isPending ? "در حال حذف اعلان مدنظر" : "حذف اعلان مدنظر"}
                </Button>
                <Button size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default RemoveNotificationModal;
