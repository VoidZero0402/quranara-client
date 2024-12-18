"use client";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import CreateNewCategoryForm from "@/components/form/template/management-panel/CreateNewCategoryForm";

import Graph from "@/components/svgs/Graph";

type CreateNewCategoryModalProps = ModalInstanceProps;

function CreateNewCategoryModal({ isOpen, onClose }: CreateNewCategoryModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <Graph />
                    ایجاد دسته‌بندی جدید
                </div>
            </ModalHeader>
            <ModalBody className="min-h-72">
                <CreateNewCategoryForm onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default CreateNewCategoryModal;
