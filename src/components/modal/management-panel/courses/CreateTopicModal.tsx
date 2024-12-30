"use client";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import CreateTopicForm from "@/components/form/template/management-panel/CreateTopicForm";

import Layers from "@/components/svgs/Layers";

import { CourseIdentifiers } from "@/types/course.types";

type CreateTopicModalProps = ModalInstanceProps & { course: CourseIdentifiers };

function CreateTopicModal({ isOpen, onClose, course }: CreateTopicModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[768px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <Layers />
                    ایجاد سرفصل جدید
                </div>
            </ModalHeader>
            <ModalBody className="space-y-8">
                <CreateTopicForm course={course} onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default CreateTopicModal;
