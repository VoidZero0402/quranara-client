import Quranara from "../clients/Quranara";

import { Response } from "@/types/response.types";
import { Session } from "@/types/session.types";
import { Question } from "@/types/question.types";

type SessionsQueriesWithSlugParams = { slug: string };

export function getSession(params: SessionsQueriesWithSlugParams): Promise<Response<{ session: Session }>> {
    const url = `/sessions/${params.slug}`;

    return Quranara.get(url);
}

export function getSessionQuestion(params: SessionsQueriesWithSlugParams): Promise<Response<{ question?: Question }>> {
    const url = `/sessions/${params.slug}/question`;

    return Quranara.get(url);
}
