"use client";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import UpdateDiscountForm from "@/components/form/template/management-panel/UpdateDiscountForm";

import PenSquare from "@/components/svgs/PenSquare";

import { Discount } from "@/types/discount.types";

type UpdateDiscountModalProps = ModalInstanceProps & { discount: Discount };

function UpdateDiscountModal({ isOpen, onClose, discount }: UpdateDiscountModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <PenSquare />
                    ویرایش کد تخفیف
                </div>
            </ModalHeader>
            <ModalBody className="min-h-72">
                <UpdateDiscountForm discount={discount} onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default UpdateDiscountModal;
