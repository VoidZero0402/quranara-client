import Quranara from "../clients/Quranara";

import { CreateTicketSchemaType, AnswerTicketSchemaType } from "@/validators/tickets";

import { MessageResponse } from "@/types/response.types";

type TicketsMutationsWithIdParams = { ticketId: string };

export function createTicket(data: CreateTicketSchemaType): MessageResponse {
    return Quranara.post("/tickets", {
        body: JSON.stringify(data),
    });
}

export function createTicketMessage(params: TicketsMutationsWithIdParams, data: AnswerTicketSchemaType): MessageResponse {
    const url = `/tickets/${params.ticketId}/message`;

    return Quranara.post(url, {
        body: JSON.stringify(data),
    });
}

export function answerTicket(params: TicketsMutationsWithIdParams, data: AnswerTicketSchemaType): MessageResponse {
    const url = `/tickets/${params.ticketId}/answer`;

    return Quranara.post(url, {
        body: JSON.stringify(data),
    });
}

export function closeTicket(params: TicketsMutationsWithIdParams): MessageResponse {
    const url = `/tickets/${params.ticketId}/close`;

    return Quranara.patch(url);
}
