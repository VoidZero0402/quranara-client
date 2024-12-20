"use client";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import GlobalNotificationForm from "@/components/form/template/management-panel/GlobalNotificationForm";

import Point from "@/components/ui/Point";

import NotificationUnreadLines from "@/components/svgs/NotificationUnreadLines";

function CreateGlobalNotificationModal({ isOpen, onClose }: ModalInstanceProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <NotificationUnreadLines />
                    ایجاد اعلان همگانی
                </div>
            </ModalHeader>
            <ModalBody className="space-y-8 min-h-72">
                <Point>برای ارسال اعلان به اعضای یک دوره یا یک کاربر به بخش مدیریت مربوطه مراجعه کنید</Point>
                <GlobalNotificationForm onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default CreateGlobalNotificationModal;
