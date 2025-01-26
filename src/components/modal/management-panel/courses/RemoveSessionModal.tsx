"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { courses as coursesCache } from "@/api/cache/tags";
import { removeSession } from "@/api/mutations/sessions";
import { RemoveSessionStatusOptions } from "@/api/errors/sessions";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "../../Modal";

import Button from "@/components/ui/Button";

import Trash from "@/components/svgs/Trash";

import { PopulatedSession } from "@/types/session.types";

type RemoveSessionModalProps = ModalInstanceProps & { session: PopulatedSession; slug: string };

function RemoveSessionModal({ isOpen, onClose, session, slug }: RemoveSessionModalProps) {
    const router = useRouter();

    const { mutate: remove, isPending } = useMutation({
        mutationFn: () => removeSession({ sessionId: session._id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, RemoveSessionStatusOptions);

                if (data.success) {
                    revalidate(coursesCache.getOne(slug), coursesCache.getTopics(slug));
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
                    حذف جلسه
                </div>
            </ModalHeader>
            <ModalBody className="space-y-4 min-h-72">
                <div className="space-y-2">
                    <span className="font-pelak-semibold text-red-500 leading-8">آیا از حذف جلسه اطمینان دارید؟</span>
                    <p className="text-gray-600 dark:text-gray-400 leading-8">مسدود کردن کابر باعث می‌شود کاربر هر گونه دسترسی به حساب کاربری خود را از دست بدهد</p>
                </div>
                {session && (
                    <p className="text-gray-700 dark:text-gray-300 leading-8">
                        در صورتی که از حذف جلسه با عنوان <span className="font-pelak-medium text-amber-400 underline">{session.title}</span> موافقید، روی دکمه <span className="underline">حذف جلسه مد نظر</span> کلیک کنید
                    </p>
                )}
            </ModalBody>
            <ModalFooter className="flex-col sm:flex-row gap-4">
                <Button size="lg" variant="filled-danger" className="w-full" disabled={isPending} onClick={remove as any}>
                    {isPending ? "در حال حذف جلسه" : "حذف جلسه مد نظر"}
                </Button>
                <Button size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default RemoveSessionModal;
