"use client";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import UpdateNotificationForm from "@/components/form/template/management-panel/UpdateNotificationForm";

import PenSquare from "@/components/svgs/PenSquare";

import { Notification } from "@/types/notification.types";

type UpdateNotificationModalProps = ModalInstanceProps & { notification: Notification };

function UpdateNotificationModal({ isOpen, onClose, notification }: UpdateNotificationModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <PenSquare />
                    ویرایش اعلان
                </div>
            </ModalHeader>
            <ModalBody className="space-y-8 min-h-72">
                <UpdateNotificationForm onClose={onClose} notification={notification} />
            </ModalBody>
        </Modal>
    );
}

export default UpdateNotificationModal;
