"use client";

import Modal, { ModalBody, ModalHeader } from "./Modal";

import CreateCommentForm from "../form/comments/CreateCommentForm";

import PenSquare from "../svgs/PenSquare";

type CreateCommentModalProps = { isOpen: boolean; onClose: () => void; replyTo?: string } & React.ComponentProps<"div">;

function CreateCommentModal({ isOpen, onClose, replyTo }: CreateCommentModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="w-3/5">
            <ModalHeader>
                <span className="flex items-center gap-x-2 font-pelak-medium text-lg text-gray-800 dark:text-gray-200">
                    <PenSquare />
                    ثبت دیدگاه
                </span>
            </ModalHeader>
            <ModalBody>
                <CreateCommentForm onCancel={onClose} replyTo={replyTo} />
            </ModalBody>
        </Modal>
    );
}

export default CreateCommentModal;
