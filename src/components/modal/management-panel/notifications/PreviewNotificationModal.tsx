"use client";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "../../Modal";

import Button from "@/components/ui/Button";

import BellOff from "@/components/svgs/BellOff";

import { type Notification } from "@/types/notification.types";

type PreviewNotificationModalProps = ModalInstanceProps & { notification: Notification };

function PreviewNotificationModal({ isOpen, onClose, notification }: PreviewNotificationModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <BellOff />
                    پیش نمایش اعلان
                </div>
            </ModalHeader>
            <ModalBody className="min-h-72">
                <Notification {...notification} />
            </ModalBody>
            <ModalFooter>
                <Button size="lg" variant="filled-primary" className="w-full" onClick={onClose}>
                    متوجه شدم
                </Button>
            </ModalFooter>
        </Modal>
    );
}

function Notification({ title, description }: Notification) {
    return (
        <div className="space-y-2">
            <span className="font-pelak-medium text-gray-800 dark:text-gray-200 leading-8">{title}</span>
            <p className="text-gray-600 dark:text-gray-400 leading-7">{description}</p>
        </div>
    );
}

export default PreviewNotificationModal;
