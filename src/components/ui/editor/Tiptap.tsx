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
import Skeleton, { SkeletonFrame } from "../Skeleton";

type TiptapProps = {
    onSave: (editor: Editor) => void;
    content?: JSONContent;
    store?: {
        key: string;
        intervalMs?: number;
        loadContent?: boolean;
    };
};

function Tiptap({ onSave, content, store }: TiptapProps) {
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
            TextStyle,
            Color,
            SpecialParagraph,
        ],
        immediatelyRender: false,
        ...(content && { content }),
        editorProps: {
            attributes: {
                class: "tiptap-custom",
            },
        },
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

        onSave(editor as Editor);
    }, [editor]);

    const onClearStorage = useCallback(() => {
        if (store?.key) {
            localStorage.removeItem(store.key);
        }
    }, [editor]);

    if (!editor) return null;

    return (
        <div className="space-y-4">
            <Toolbar editor={editor} setLink={setLink} setImage={setImage} />
            <EditorContent editor={editor} />
            <div className="flex flex-col sm:flex-row gap-4">
                <Button type="button" size="lg" onClick={onSaveContent}>
                    ذخیره‌سازی محتوا
                </Button>
                <Button type="button" size="lg" variant="neutral-base" onClick={onClearStorage}>
                    پاک‌سازی حافظه پنهان
                </Button>
            </div>
            <TiptapSetLinkModal isOpen={isOpenLinkModal} onClose={closeLinkModal} {...linkModalProps} />
            <TiptapSetImageModal isOpen={isOpenImageModal} onClose={closeImageModal} {...imageModalProps} />
        </div>
    );
}

export function TiptapLoading() {
    return (
        <Skeleton className="space-y-4">
            <SkeletonFrame className="h-14 rounded-xl" />
            <SkeletonFrame className="h-40 rounded-xl" />
            <div className="flex flex-col sm:flex-row gap-4">
                <SkeletonFrame className="w-40 h-14 rounded-2xl"></SkeletonFrame>
                <SkeletonFrame className="w-40 h-14 rounded-2xl"></SkeletonFrame>
            </div>
        </Skeleton>
    );
}

export default Tiptap;
