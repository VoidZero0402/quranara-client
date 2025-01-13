"use client";

import { memo } from "react";

import { Editor } from "@tiptap/react";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "./Modal";

import TiptapSetLinkForm from "../form/template/TiptapSetLinkForm";

import LinkRoundAngle from "../svgs/LinkRoundAngle";

type TiptapSetLinkModalProps = { editor: Editor } & ModalInstanceProps;

function TiptapSetLinkModal({ isOpen, onClose, editor }: TiptapSetLinkModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <LinkRoundAngle />
                    مدیریت و تغییر لینک
                </div>
            </ModalHeader>
            <ModalBody>
                <TiptapSetLinkForm editor={editor} onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default memo(TiptapSetLinkModal);
