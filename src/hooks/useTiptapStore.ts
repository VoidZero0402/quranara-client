import { useEffect } from "react";
import { Editor } from "@tiptap/react";

type StoreOptions = {
    key?: string;
    intervalMs?: number;
    loadContent?: boolean;
};

function useTiptapStore(editor: Editor | null, storeOptions?: StoreOptions) {
    const store = { intervalMs: 120_000, loadContent: true, ...storeOptions };

    useEffect(() => {
        if (editor && store.key) {
            const interval = setInterval(() => {
                localStorage.setItem(store.key as string, JSON.stringify(editor.getJSON()));
            }, store.intervalMs);

            if (store.loadContent) {
                const content = localStorage.getItem(store.key);

                if (content) {
                    editor.commands.setContent(JSON.parse(content));
                }
            }

            return () => clearInterval(interval);
        }
    }, [editor]);
}

export default useTiptapStore;
