import { Editor } from "@tiptap/react";

import ArrowDown from "@/components/svgs/ArrowDown";

type ColorsProps = {
    editor: Editor;
};

function Colors({ editor }: ColorsProps) {
    return (
        <div className="group flex-center relative z-10">
            <div className="flex items-center gap-x-2 h-10 px-2.5 text-gray-500 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-750 rounded-xl cursor-pointer transition-colors">
                <ArrowDown className="w-5" />
                <div className="size-4 rounded-md transition-all" style={{ backgroundColor: editor.getAttributes("textStyle").color || "#6b7280" }}></div>
            </div>
            <div className="absolute top-full left-0 pt-4 invisible opacity-0 group-hover:pt-2 group-hover:visible group-hover:opacity-100 transition-all">
                <div className="space-y-2 w-max p-4 bg-gray-100 dark:bg-gray-750 rounded-xl">
                    <div className="flex gap-x-2">
                        <button className="size-8 bg-sky-500 rounded-lg" onClick={() => editor.chain().focus().setColor("#0ea5e9").run()}></button>
                        <button className="size-8 bg-teal-500 rounded-lg" onClick={() => editor.chain().focus().setColor("#14b8a6").run()}></button>
                        <button className="size-8 bg-red-500 rounded-lg" onClick={() => editor.chain().focus().setColor("#ef4444").run()}></button>
                        <button className="size-8 bg-amber-400 rounded-lg" onClick={() => editor.chain().focus().setColor("#fbbf24").run()}></button>
                        <button className="size-8 bg-blue-500 rounded-lg" onClick={() => editor.chain().focus().setColor("#3b82f6").run()}></button>
                        <button className="size-8 bg-gray-500 rounded-lg" onClick={() => editor.chain().focus().unsetColor().run()}></button>
                    </div>
                </div>
            </div>
            <div className="absolute -top-10 m-auto w-max py-2 px-3 bg-white dark:bg-gray-850 font-pelak-medium text-xs text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-all">ایجاد نوشته رنگی</div>
        </div>
    );
}

export default Colors;
