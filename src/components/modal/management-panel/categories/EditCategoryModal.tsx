"use client";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import EditCategoryForm from "@/components/form/template/management-panel/EditCategoryForm";

import PenSquare from "@/components/svgs/PenSquare";

import { Category } from "@/types/category.types";

type EditCategoryModalProps = ModalInstanceProps & { category: Category };

function EditCategoryModal({ isOpen, onClose, category }: EditCategoryModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <PenSquare />
                    ویرایش دسته‌بندی
                </div>
            </ModalHeader>
            <ModalBody className="min-h-72">
                <EditCategoryForm category={category} onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default EditCategoryModal;
