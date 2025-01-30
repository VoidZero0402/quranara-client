import Quranara from "../clients/Quranara";

import { Response } from "@/types/response.types";
import { Session } from "@/types/session.types";
import { Question } from "@/types/question.types";

type SessionsQueriesWithSlugParams = { slug: string };

export function getSession(params: SessionsQueriesWithSlugParams, cookie?: string): Promise<Response<{ session: Session }>> {
    const url = `/sessions/${params.slug}`;

    return Quranara.get(url, {
        headers: {
            ...(cookie !== undefined && { cookie }),
        },
    });
}

export function getSessionQuestion(params: SessionsQueriesWithSlugParams, cookie?: string): Promise<Response<{ question?: Question }>> {
    const url = `/sessions/${params.slug}/question`;

    return Quranara.get(url, {
        headers: {
            ...(cookie !== undefined && { cookie }),
        },
    });
}
