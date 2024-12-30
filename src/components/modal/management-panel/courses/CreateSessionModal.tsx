"use client";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import CreateSessionForm from "@/components/form/template/management-panel/CreateSessionForm";

import PlaybackSpeed from "@/components/svgs/PlaybackSpeed";

import { LimitedTopic } from "@/types/topic.types";

type CreateSessionModalProps = ModalInstanceProps & { topic: LimitedTopic; slug: string };

function CreateSessionModal({ isOpen, onClose, topic, slug }: CreateSessionModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[768px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <PlaybackSpeed />
                    ایجاد جلسه جدید
                </div>
            </ModalHeader>
            <ModalBody className="space-y-8">
                <CreateSessionForm topic={topic} slug={slug} onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default CreateSessionModal;
