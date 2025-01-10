"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { banUser } from "@/api/mutations/users";
import { BanUserStatusOptions } from "@/api/errors/users";

import { statusHandler } from "@/libs/responses";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "../../Modal";

import Button from "@/components/ui/Button";

import UserBlockRounded from "@/components/svgs/UserBlockRounded";

import { User } from "@/types/user.types";

type BanUserModalProps = ModalInstanceProps & { user: Pick<User, "_id" | "username" | "phone"> };

function BanUserModal({ isOpen, onClose, user }: BanUserModalProps) {
    const router = useRouter();

    const { mutate: ban, isPending } = useMutation({
        mutationFn: () => banUser({ user: user._id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, BanUserStatusOptions);

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
                    <UserBlockRounded />
                    مسدود کردن کاربر
                </div>
            </ModalHeader>
            <ModalBody className="space-y-4 min-h-72">
                <div className="space-y-2">
                    <span className="font-pelak-semibold text-red-500 leading-8">آیا از مسدود کردن کاربر اطمینان دارید؟</span>
                    <p className="text-gray-600 dark:text-gray-400 leading-8">مسدود کردن کابر باعث می‌شود کاربر هر گونه دسترسی به حساب کاربری خود را از دست بدهد</p>
                </div>
                {user && (
                    <p className="text-gray-700 dark:text-gray-300 leading-8">
                        در صورتی که از مسدود کردن کاربر با نام کاربری <span className="font-pelak-medium text-amber-400 underline">{user.username}</span> و شماره موبایل <span className="font-pelak-medium text-amber-400 underline">{user.phone}</span> موافقید، روی دکمه <span className="underline">مسدود کردن کاربر</span> کلیک کنید
                    </p>
                )}
            </ModalBody>
            <ModalFooter className="flex-col sm:flex-row gap-4">
                <Button size="lg" variant="filled-danger" className="w-full" disabled={isPending} onClick={ban as any}>
                    {isPending ? "در حال مسدودیت" : "مسدود کردن کاربر"}
                </Button>
                <Button size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default BanUserModal;
