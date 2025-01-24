"use client";

import { memo } from "react";

import { Editor } from "@tiptap/react";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "./Modal";

import TiptapSetImageForm from "../form/template/TiptapSetImageForm";

import Gallery from "../svgs/Gallery";

import { Source } from "@/types/editor.types";

type TiptapSetImageModalProps = { editor: Editor; source: Source } & ModalInstanceProps;

function TiptapSetImageModal({ isOpen, onClose, editor, source }: TiptapSetImageModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <Gallery />
                    مدیریت و تغییر تصویر
                </div>
            </ModalHeader>
            <ModalBody>
                <TiptapSetImageForm editor={editor} source={source} onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default memo(TiptapSetImageModal);
