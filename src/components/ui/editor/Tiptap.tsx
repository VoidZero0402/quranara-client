"use client";

import { useCallback } from "react";
import { useEditor, EditorContent, Editor, Content } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";

import { SpecialParagraph } from "@/libs/tiptap";

import useToggleState from "@/hooks/useToggleState";

import Toolbar from "./Toolbar";

import TiptapSetLinkModal from "@/components/modal/TiptapSetLinkModal";
import TiptapSetImageModal from "@/components/modal/TiptapSetImageModal";

import Button from "../Button";

type TiptapProps = {
    onSave: (content: Content) => void;
    key?: string;
};

function Tiptap({ onSave, key }: TiptapProps) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [2, 3, 4],
                },
            }),
            Underline,
            Link.configure({
                openOnClick: false,
            }),
            Image,
            TextStyle.configure({
                HTMLAttributes: {
                    class: "font-pelak-medium",
                },
            }),
            Color,
            SpecialParagraph,
        ],
        editorProps: {
            attributes: {
                class: "p-4 w-full min-h-40 bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 focus:border-gray-200 dark:focus:border-gray-700 rounded-xl transition-all",
            },
        },
    });

    const { isOpen: isOpenLinkModal, open: openLinkModal, close: closeLinkModal, props: linkModalProps } = useToggleState<{ editor: Editor }>();
    const { isOpen: isOpenImageModal, open: openImageModal, close: closeImageModal, props: imageModalProps } = useToggleState<{ editor: Editor }>();

    const setLink = useCallback(() => {
        openLinkModal({ editor: editor as Editor });
    }, [editor]);

    const setImage = useCallback(() => {
        openImageModal({ editor: editor as Editor });
    }, [editor]);

    if (!editor) return null;

    return (
        <div className="space-y-4">
            <Toolbar editor={editor} setLink={setLink} setImage={setImage} />
            <EditorContent editor={editor} />
            <Button size="lg" variant="neutral-base">
                ذخیره‌سازی محتوا
            </Button>
            <TiptapSetLinkModal isOpen={isOpenLinkModal} onClose={closeLinkModal} {...linkModalProps} />
            <TiptapSetImageModal isOpen={isOpenImageModal} onClose={closeImageModal} {...imageModalProps} />
        </div>
    );
}

/*

tasks

5. better styling

6. saves in local storage

7. integrate with react-hook-form

8. render engine

*/

export default Tiptap;
