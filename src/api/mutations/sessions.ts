import Quranara from "../clients/Quranara";

import { CreateSessionSchemaType, UpdateSessionSchemaType, UpdateSessionOrderSchemaType } from "@/validators/sessions";

import { MessageResponse } from "@/types/response.types";

type SessionsMutationsWithIdParams = { sessionId: string };

export function createSession(data: CreateSessionSchemaType): MessageResponse {
    return Quranara.post("/sessions", {
        body: JSON.stringify(data),
    });
}

export function updateSession(params: SessionsMutationsWithIdParams, data: UpdateSessionSchemaType): MessageResponse {
    const url = `/sessions/${params.sessionId}`;

    return Quranara.put(url, {
        body: JSON.stringify(data),
    });
}

export function removeSession(params: SessionsMutationsWithIdParams): MessageResponse {
    const url = `/sessions/${params.sessionId}`;

    return Quranara.delete(url);
}

export function updateSessionOrder(params: SessionsMutationsWithIdParams, data: UpdateSessionOrderSchemaType): MessageResponse {
    const url = `/sessions/${params.sessionId}/order`;

    return Quranara.patch(url, {
        body: JSON.stringify(data),
    });
}
