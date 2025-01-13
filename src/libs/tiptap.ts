import { Node } from "@tiptap/core";
import { mergeAttributes } from "@tiptap/react";

interface SpecialParagraphOptions {
    HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        specialParagraph: {
            setSpecialParagraph: () => ReturnType;
        };
    }
}

export const SpecialParagraph = Node.create<SpecialParagraphOptions>({
    name: "specialParagraph",
    priority: 1000,
    addOptions() {
        return {
            HTMLAttributes: {
                class: "special-paragraph",
            },
        };
    },
    group: "block",
    content: "inline*",
    parseHTML() {
        return [{ tag: "p" }];
    },
    renderHTML({ HTMLAttributes }) {
        return ["p", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    addCommands() {
        return {
            setSpecialParagraph:
                () =>
                ({ commands }) => {
                    return commands.setNode(this.name);
                },
        };
    },
});
