"use client";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import GlobalDiscountForm from "@/components/form/template/management-panel/GlobalDiscountForm";

import ResetDiscounts from "@/components/specific/management-panel/discounts/ResetDiscounts";

import Point from "@/components/ui/Point";

import Discount from "@/components/svgs/Discount";

function GlobalDiscountModal({ isOpen, onClose }: ModalInstanceProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <Discount />
                    اعمال تخفیف همگانی
                </div>
            </ModalHeader>
            <ModalBody className="space-y-8 min-h-72">
                <Point>توجه داشته باشید، با اعمال تخفیف همگانی تمامی دوره‌ها شامل تخفیف خواهند شد</Point>
                <ResetDiscounts />
                <GlobalDiscountForm onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default GlobalDiscountModal;
