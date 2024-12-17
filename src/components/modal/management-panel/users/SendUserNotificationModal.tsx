"use client";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import NotificationForm from "@/components/form/template/management-panel/UserNotificationForm";

import NotificationUnreadLines from "@/components/svgs/NotificationUnreadLines";

type SendUserNotificationModalProps = ModalInstanceProps & { _id: string };

function SendUserNotificationModal({ isOpen, onClose, _id }: SendUserNotificationModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <NotificationUnreadLines />
                    ارسال اعلان به کاربر
                </div>
            </ModalHeader>
            <ModalBody className="min-h-72">
                <NotificationForm userId={_id} onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default SendUserNotificationModal;
