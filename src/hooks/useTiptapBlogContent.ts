import { useCallback } from "react";
import { Editor } from "@tiptap/react";
import { UseFormSetValue } from "react-hook-form";

import { Heading } from "@/types/blog.types";

function useTiptapBlogContent(setValue: UseFormSetValue<any>) {
    const onSave = useCallback((editor: Editor) => {
        const nodes = editor.$nodes("heading", { level: 2 });

        const headings: Heading[] = [];

        if (nodes && nodes.length) {
            for (let i = 0; i < nodes.length; i++) {
                const id = `heading-${i + 1}`;

                headings.push({ id, text: nodes[i].textContent });

                nodes[i].attributes.id = id;
            }
        }

        const content = !editor.isEmpty ? JSON.stringify(editor.getJSON()) : "";

        setValue("content", content, {
            shouldDirty: true,
            shouldTouch: true,
        });

        setValue("headings", headings);
    }, []);

    return onSave;
}

export default useTiptapBlogContent;
