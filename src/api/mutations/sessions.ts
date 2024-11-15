import Quranara from "../clients/Quranara";
import { CreateSessionSchemaType, UpdateSessionSchemaType, UpdateSessionOrderSchemaType } from "@/validators/sessions";

type SessionsMutationsWithIdParams = { sessionId: string };

export function createSession(data: CreateSessionSchemaType) {
    return Quranara.post("/sessions", {
        body: JSON.stringify(data),
    });
}

export function updateSession(params: SessionsMutationsWithIdParams, data: UpdateSessionSchemaType) {
    const url = `/sessions/${params.sessionId}`;

    return Quranara.put(url, {
        body: JSON.stringify(data),
    });
}

export function removeSession(params: SessionsMutationsWithIdParams) {
    const url = `/sessions/${params.sessionId}`;

    return Quranara.delete(url);
}

export function updateSessionOrder(params: SessionsMutationsWithIdParams, data: UpdateSessionOrderSchemaType) {
    const url = `/sessions/${params.sessionId}/order`;

    return Quranara.patch(url, {
        body: JSON.stringify(data),
    });
}
