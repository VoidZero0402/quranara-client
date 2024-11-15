import Quranara from "../clients/Quranara";

type SessionsQueriesWithSlugParams = { slug: string };

export function getSession(params: SessionsQueriesWithSlugParams) {
    const url = `/sessions/${params.slug}`;

    return Quranara.get(url);
}

export function getSessionQuestion(params: SessionsQueriesWithSlugParams) {
    const url = `/sessions/${params.slug}/question`;

    return Quranara.get(url);
}
