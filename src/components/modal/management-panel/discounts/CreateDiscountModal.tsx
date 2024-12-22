"use client";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import CreateDiscountForm from "@/components/form/template/management-panel/CreateDiscountForm";

import Discount from "@/components/svgs/Discount";

function CreateDiscountModal({ isOpen, onClose }: ModalInstanceProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <Discount />
                    ایجاد کد تخفیف جدید
                </div>
            </ModalHeader>
            <ModalBody className="space-y-8 min-h-72">
                <CreateDiscountForm onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default CreateDiscountModal;
