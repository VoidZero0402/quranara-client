import { useCallback } from "react";
import { Editor } from "@tiptap/react";
import { UseFormSetValue } from "react-hook-form";

function useTiptapContent(setValue: UseFormSetValue<any>, field: string) {
    const onSave = useCallback((editor: Editor) => {
        const content = !editor.isEmpty ? JSON.stringify(editor.getJSON()) : "";

        setValue(field, content, {
            shouldDirty: true,
            shouldTouch: true,
        });
    }, []);

    return onSave;
}

export default useTiptapContent;
