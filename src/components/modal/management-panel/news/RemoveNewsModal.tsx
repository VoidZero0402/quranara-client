"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { news as newsCache } from "@/api/cache/tags";

import { removeNews } from "@/api/mutations/news";
import { RemoveNewsStatusOptions } from "@/api/errors/news";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "../../Modal";

import Button from "@/components/ui/Button";

import Trash from "@/components/svgs/Trash";

import { News } from "@/types/news.types";

type RemoveNewsModalProps = ModalInstanceProps & { news: Pick<News, "_id" | "title"> };

function RemoveNewsModal({ isOpen, onClose, news }: RemoveNewsModalProps) {
    const router = useRouter();

    const { mutate: remove, isPending } = useMutation({
        mutationFn: () => removeNews({ newsId: news._id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, RemoveNewsStatusOptions);

                if (data.success) {
                    revalidate(newsCache.default);
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
                    حذف کردن خبر
                </div>
            </ModalHeader>
            <ModalBody className="space-y-4 min-h-72">
                <div className="space-y-2">
                    <span className="font-pelak-semibold text-red-500 leading-8">آیا از حذف کردن خبر اطمینان دارید؟</span>
                    <p className="text-gray-600 dark:text-gray-400 leading-8">با حذف خبر، خبر برای همیشه از دیتابیس حذف شده و غیر قابل بازگردانی است</p>
                </div>
                {news && (
                    <p className="text-gray-700 dark:text-gray-300 leading-8">
                        در صورتی که از حذف خبر با عنوان <span className="font-pelak-medium text-amber-400 underline">{news.title}</span> اطمینان دارید روی حذف خبر کلیک کنید
                    </p>
                )}
            </ModalBody>
            <ModalFooter className="flex-col sm:flex-row gap-4">
                <Button size="lg" variant="filled-danger" className="w-full" disabled={isPending} onClick={remove as any}>
                    {isPending ? "در حال حذف خبر مدنظر" : "حذف خبر مدنظر"}
                </Button>
                <Button size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default RemoveNewsModal;
