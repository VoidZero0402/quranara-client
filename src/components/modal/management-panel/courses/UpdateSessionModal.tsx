"use client";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import UpdateSessionForm from "@/components/form/template/management-panel/UpdateSessionForm";

import PlaybackSpeed from "@/components/svgs/PlaybackSpeed";

import { PopulatedSession } from "@/types/session.types";

type UpdateSessionModalProps = ModalInstanceProps & { session: PopulatedSession; slug: string };

function UpdateSessionModal({ isOpen, onClose, session, slug }: UpdateSessionModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[768px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <PlaybackSpeed />
                    ویرایش جلسه
                </div>
            </ModalHeader>
            <ModalBody className="space-y-8">
                <UpdateSessionForm session={session} slug={slug} onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default UpdateSessionModal;
