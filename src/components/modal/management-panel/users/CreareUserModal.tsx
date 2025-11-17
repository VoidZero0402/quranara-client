"use client";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import CreateUserForm from "@/components/form/template/management-panel/CreateUserForm";

import UserRounded from "@/components/svgs/UserRounded";

function CreareUserModal({ isOpen, onClose }: ModalInstanceProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <UserRounded />
                    اضافه کردن کاربر جدید
                </div>
            </ModalHeader>
            <ModalBody className="space-y-8 min-h-72">
                <CreateUserForm onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default CreareUserModal;
