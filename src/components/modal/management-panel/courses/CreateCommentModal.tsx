"use client";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import CreateCommentForm from "@/components/form/template/management-panel/CreateCommentForm";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";

import { CourseIdentifiers } from "@/types/course.types";

type CreateCommentModalProps = ModalInstanceProps & { course: CourseIdentifiers };

function CreateCommentModal({ isOpen, onClose, course }: CreateCommentModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[768px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <ChatRoundLine />
                    ایجاد نظر جدید
                </div>
            </ModalHeader>
            <ModalBody className="space-y-8"><CreateCommentForm course={course} onClose={onClose} /></ModalBody>
        </Modal>
    );
}

export default CreateCommentModal;
