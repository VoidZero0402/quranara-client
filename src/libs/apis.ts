import { courses, blog, tv } from "@/api/cache/tags";

import { revalidate } from "./revalidate";

import { SOURCE } from "@/constants/comments";

import { Source } from "@/types/comment.types";
import { CookieUser } from "@/types/user.types";

export async function getCookieUser(): Promise<CookieUser | null> {
    const response = await fetch("/api/cookies?key=_user");
    const { value } = await response.json();

    return value ?? null;
}

const CommentCache = {
    [SOURCE.COURSE]: courses,
    [SOURCE.BLOG]: blog,
    [SOURCE.TV]: tv,
};

export async function revalidateCommentsCache(source: Source, slug: string) {
    await revalidate(CommentCache[source].getComments(slug));
}
