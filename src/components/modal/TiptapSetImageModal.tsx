"use client";

import { memo } from "react";

import { Editor } from "@tiptap/react";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "./Modal";

import Gallery from "../svgs/Gallery";
import TiptapSetImageForm from "../form/template/TiptapSetImageForm";

type TiptapSetImageModalProps = { editor: Editor } & ModalInstanceProps;

function TiptapSetImageModal({ isOpen, onClose, editor }: TiptapSetImageModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <Gallery />
                    مدیریت و تغییر تصویر
                </div>
            </ModalHeader>
            <ModalBody>
                <TiptapSetImageForm editor={editor} onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default memo(TiptapSetImageModal);
