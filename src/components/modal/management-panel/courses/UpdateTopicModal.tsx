"use client";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import UpdateTopicForm from "@/components/form/template/management-panel/UpdateTopicForm";

import Layers from "@/components/svgs/Layers";

import { LimitedTopic } from "@/types/topic.types";

type UpdateTopicModalProps = ModalInstanceProps & { topic: LimitedTopic; slug: string };

function UpdateTopicModal({ isOpen, onClose, topic, slug }: UpdateTopicModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[768px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <Layers />
                    ویرایش سرفصل
                </div>
            </ModalHeader>
            <ModalBody className="space-y-8">
                <UpdateTopicForm topic={topic} slug={slug} onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default UpdateTopicModal;
