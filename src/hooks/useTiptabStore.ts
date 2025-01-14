import { useEffect } from "react";
import { Editor } from "@tiptap/react";

function useTiptabStore(editor: Editor | null, key?: string, intervalMs: number = 120_000) {
    useEffect(() => {
        if (editor && key) {
            const interval = setInterval(() => {
                localStorage.setItem(key, editor.getHTML());
            }, intervalMs);

            editor.commands.setContent(localStorage.getItem(key) ?? "");

            return () => clearInterval(interval);
        }
    }, [editor]);
}

export default useTiptabStore;
