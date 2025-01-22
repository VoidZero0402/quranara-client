"use client";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "../../Modal";

import Button from "@/components/ui/Button";
import Image from "@/components/ui/Image";

import Document from "@/components/svgs/Document";
import LinkCircle from "@/components/svgs/LinkCircle";

import { type News } from "@/types/news.types";

type PreviewNewsModalProps = ModalInstanceProps & { news: News };

function PreviewNewsModal({ isOpen, onClose, news }: PreviewNewsModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <Document />
                    پیش نمایش خبر
                </div>
            </ModalHeader>
            <ModalBody className="min-h-72" scrollable>
                <News {...news} />
            </ModalBody>
            <ModalFooter>
                <Button size="lg" variant="filled-primary" className="w-full" onClick={onClose}>
                    متوجه شدم
                </Button>
            </ModalFooter>
        </Modal>
    );
}

function News({ cover, title, description, link }: News) {
    return (
        <div className="space-y-4">
            <div className="aspect-[2/1]">
                <Image src={cover} alt={title} width={720} height={405} wrapperClassName="rounded-xl" />
            </div>
            <div className="space-y-2 leading-8">
                <span className="font-pelak-medium text-lg text-gray-800 dark:text-gray-200">{title}</span>
                <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </div>
            {link && (
                <Button size="lg">
                    <LinkCircle />
                    {link.text}
                </Button>
            )}
        </div>
    );
}

export default PreviewNewsModal;
