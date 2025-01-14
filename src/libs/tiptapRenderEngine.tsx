import { createElement } from "react";
import Link from "next/link";
import { JSONContent, Mark } from "@tiptap/react";

import Image from "@/components/ui/Image";

interface NodeRendererProps {
    children?: React.ReactNode;
    level?: number;
    src?: string;
    alt?: string;
}

interface MarkRendererProps {
    children: React.ReactNode;
    href?: string;
    color?: string;
}

type NodeRenderer = (props: NodeRendererProps) => React.ReactNode;
type MarkRenderer = (props: MarkRendererProps) => React.ReactNode;

class TiptapRenderEngine {
    private nodes: Record<string, NodeRenderer> = {
        text: ({ children }) => children,
        paragraph: ({ children }) => <p>{children}</p>,
        specialParagraph: ({ children }) => <p className="special-paragraph">{children}</p>,
        heading: ({ children, level = 2 }) => createElement(`h${level}`, null, children),
        bulletList: ({ children }) => <ul>{children}</ul>,
        listItem: ({ children }) => <li>{children}</li>,
        image: ({ src = "", alt = "" }) => <Image src={src} alt={alt} width={1280} height={720} />,
    };

    private marks: Record<string, MarkRenderer> = {
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <em>{children}</em>,
        underline: ({ children }) => <u>{children}</u>,
        link: ({ children, href = "#" }) => <Link href={href}>{children}</Link>,
        textStyle: ({ children, color = "inherit" }) => <span style={{ color }}>{children}</span>,
    };

    renderMark(text: string, marks: JSONContent[] = []): React.ReactNode {
        return marks.reduce((acc, mark) => {
            const Mark = this.marks[mark.type as string];

            if (!Mark) return null;

            return <Mark {...mark.attrs}>{acc}</Mark>;
        }, text as React.ReactNode);
    }

    render(content: JSONContent[]): React.ReactNode {
        return content.map((node, index) => {
            const Node = this.nodes[node.type as string];

            if (!Node) return null;

            const nodeContent = node.text && node.marks ? this.renderMark(node.text, node.marks as Mark[]) : node.text ?? null;

            return (
                <Node key={index} {...node.attrs}>
                    {node.content ? this.render(node.content) : nodeContent}
                </Node>
            );
        });
    }
}

export default TiptapRenderEngine;
