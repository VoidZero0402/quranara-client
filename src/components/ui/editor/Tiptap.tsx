"use client";

import { useCallback } from "react";
import { useEditor, EditorContent, Editor, JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";

import { SpecialParagraph } from "@/libs/tiptap";

import useToggleState from "@/hooks/useToggleState";
import useTiptapStore from "@/hooks/useTiptapStore";

import Toolbar from "./Toolbar";

import TiptapSetLinkModal from "@/components/modal/TiptapSetLinkModal";
import TiptapSetImageModal from "@/components/modal/TiptapSetImageModal";

import Button from "../Button";

type TiptapProps = {
    onSave: (content: JSONContent | null) => void;
    store?: {
        key: string;
        intervalMs?: number;
        loadContent?: boolean;
    };
};

function Tiptap({ onSave, store }: TiptapProps) {
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
    });

    useTiptapStore(editor, store);

    const { isOpen: isOpenLinkModal, open: openLinkModal, close: closeLinkModal, props: linkModalProps } = useToggleState<{ editor: Editor }>();
    const { isOpen: isOpenImageModal, open: openImageModal, close: closeImageModal, props: imageModalProps } = useToggleState<{ editor: Editor }>();

    const setLink = useCallback(() => {
        openLinkModal({ editor: editor as Editor });
    }, [editor]);

    const setImage = useCallback(() => {
        openImageModal({ editor: editor as Editor });
    }, [editor]);

    const onSaveContent = useCallback(() => {
        if (store?.key) {
            localStorage.setItem(store.key, JSON.stringify((editor as Editor).getJSON()));
        }

        const content = !(editor as Editor).isEmpty ? (editor as Editor).getJSON() : null;

        onSave(content);
    }, [editor]);

    if (!editor) return null;

    return (
        <div className="space-y-4 p-4 bg-white dark:bg-gray-850 rounded-2xl">
            <Toolbar editor={editor} setLink={setLink} setImage={setImage} />
            <EditorContent editor={editor} />
            <Button size="lg" variant="neutral-base" onClick={onSaveContent}>
                ذخیره‌سازی محتوا
            </Button>
            <TiptapSetLinkModal isOpen={isOpenLinkModal} onClose={closeLinkModal} {...linkModalProps} />
            <TiptapSetImageModal isOpen={isOpenImageModal} onClose={closeImageModal} {...imageModalProps} />
        </div>
    );
}

export default Tiptap;
