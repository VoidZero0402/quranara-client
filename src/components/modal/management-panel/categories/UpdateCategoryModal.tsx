"use client";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import UpdateCategoryForm from "@/components/form/template/management-panel/UpdateCategoryForm";

import PenSquare from "@/components/svgs/PenSquare";

import { Category } from "@/types/category.types";

type UpdateCategoryModalProps = ModalInstanceProps & { category: Category };

function UpdateCategoryModal({ isOpen, onClose, category }: UpdateCategoryModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <PenSquare />
                    ویرایش دسته‌بندی
                </div>
            </ModalHeader>
            <ModalBody className="min-h-72">
                <UpdateCategoryForm category={category} onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default UpdateCategoryModal;
