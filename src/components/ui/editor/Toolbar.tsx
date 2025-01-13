import { Editor } from "@tiptap/react";

import Action from "./Action";
import Colors from "./Colors";

import Bold from "@/components/svgs/editor/Bold";
import Italic from "@/components/svgs/editor/Italic";
import Underline from "@/components/svgs/editor/Underline";
import Paragraph from "@/components/svgs/editor/Paragraph";
import SpecialParagraph from "@/components/svgs/editor/SpecialParagraph";
import Heading2 from "@/components/svgs/editor/Heading2";
import Heading3 from "@/components/svgs/editor/Heading3";
import Heading4 from "@/components/svgs/editor/Heading4";
import Link from "@/components/svgs/editor/Link";
import List from "@/components/svgs/editor/List";
import Image from "@/components/svgs/editor/Image";
import Poll from "@/components/svgs/editor/Poll";
import Undo from "@/components/svgs/editor/Undo";
import Redo from "@/components/svgs/editor/Redo";

type ToolbarProps = { editor: Editor; setLink: () => void; setImage: () => void };

function Toolbar({ editor, setLink, setImage }: ToolbarProps) {
    return (
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <div className="flex gap-x-2">
                <Action isActive={editor.isActive("bold")} label="نوشته ضخیم" onClick={() => editor.chain().focus().toggleBold().run()}>
                    <Bold />
                </Action>
                <Action isActive={editor.isActive("italic")} label="نوشته مورب" onClick={() => editor.chain().focus().toggleItalic().run()}>
                    <Italic />
                </Action>
                <Action isActive={editor.isActive("underline")} label="خط زیرین" onClick={() => editor.chain().focus().toggleUnderline().run()}>
                    <Underline />
                </Action>
            </div>
            <div className="hidden lg:block w-[1px] h-8 bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex gap-x-2">
                <Action isActive={editor.isActive("paragraph")} label="پاراگراف" onClick={() => editor.chain().focus().setParagraph().run()}>
                    <Paragraph />
                </Action>
                <Action isActive={editor.isActive("specialParagraph")} label="پاراگراف خاص" onClick={() => editor.chain().focus().setSpecialParagraph().run()}>
                    <SpecialParagraph />
                </Action>
                <Action isActive={editor.isActive("heading", { level: 2 })} label="سرنوشت سطح ۱" onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}>
                    <Heading2 />
                </Action>
                <Action isActive={editor.isActive("heading", { level: 3 })} label="سرنوشت سطح ۲" onClick={() => editor.chain().focus().setHeading({ level: 3 }).run()}>
                    <Heading3 />
                </Action>
                <Action isActive={editor.isActive("heading", { level: 4 })} label="سرنوشت سطح ۳" onClick={() => editor.chain().focus().setHeading({ level: 4 }).run()}>
                    <Heading4 />
                </Action>
            </div>
            <div className="hidden lg:block w-[1px] h-8 bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex gap-x-2">
                <Action isActive={editor.isActive("link")} label="ایجاد لینک" onClick={setLink}>
                    <Link />
                </Action>
                <Action isActive={editor.isActive("bulletList")} label="ایجاد لیست" onClick={() => editor.chain().focus().toggleBulletList().run()}>
                    <List />
                </Action>
                <Action isActive={editor.isActive("image")} label="اضافه کردن تصویر" onClick={setImage}>
                    <Image />
                </Action>
                <Action isActive={false} label="نظرسنجی">
                    <Poll />
                </Action>
            </div>
            <div className="hidden lg:block w-[1px] h-8 bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex gap-x-2">
                <Colors editor={editor} />
            </div>
            <div className="hidden lg:block w-[1px] h-8 bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex gap-x-2">
                <Action isActive={false} disabled={!editor.can().undo()} label="بازگردانی به عقب" onClick={() => editor.chain().focus().undo().run()}>
                    <Undo />
                </Action>
                <Action isActive={false} disabled={!editor.can().redo()} label="بازگردانی به جلو" onClick={() => editor.chain().focus().redo().run()}>
                    <Redo />
                </Action>
            </div>
        </div>
    );
}

export default Toolbar;
