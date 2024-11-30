"use client";

import Modal, { ModalBody, ModalHeader } from "./Modal";

import CreateCommentForm from "../form/comments/CreateCommentForm";

import PenSquare from "../svgs/PenSquare";

type CreateCommentModalProps = { isOpen: boolean; onClose: () => void; replyTo?: string } & React.ComponentProps<"div">;

function CreateCommentModal({ isOpen, onClose, replyTo }: CreateCommentModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="size-full rounded-none md:rounded-xl md:w-3/5 md:h-max">
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
