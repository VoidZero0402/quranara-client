import { Poll as PollType } from "./poll.types";

type Text = string;

export type Heading2 = { type: "HEADING2"; content: Text };

export type Heading3 = { type: "HEADING3"; content: Text };

export type Heading4 = { type: "HEADING4"; content: Text };

type ParagraphContent = { type: "DEFAULT"; content: Text } | { type: "BOLD"; content: Text } | { type: "ITALIC"; content: Text } | { type: "COLORIZE"; varient: "blue" | "amber" | "red"; content: Text } | { type: "LINK"; href: string; content: Text };

export type Paragraph = { type: "PARAGRAPH"; content: ParagraphContent[] };

export type Image = { type: "IMAGE"; srcs: string[] };

export type SpecialParagraph = { type: "SPECIAL_PARAGRAPH"; content: Text };

type ListContent = { content: Text; paragraph: Paragraph };

export type List = { type: "LIST"; items: ListContent[] };

export type Poll = { type: "POLL"; content: PollType };
