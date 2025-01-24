import { Source } from "@/types/editor.types";

const baseURL = "https://dl.quranara.com";

export const SourcePaths: Record<Source, string> = {
    blog: `${baseURL}/blog/content`,
    tv: `${baseURL}/tv/content`,
    course: `${baseURL}/courses/content`,
    session: `${baseURL}/sessions/content`,
} as const;
