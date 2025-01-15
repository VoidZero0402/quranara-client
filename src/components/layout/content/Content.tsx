import { renderTiptapContent } from "@/libs/tiptap";

type ContentProps = { content: string };

function Content({ content }: ContentProps) {
    return <div className="tiptap tiptap-content">{renderTiptapContent(content)}</div>;
}

export default Content;
