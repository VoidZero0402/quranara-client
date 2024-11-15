import Quranara from "../clients/Quranara";
import { CreateTicketSchemaType, AnswerTicketSchemaType } from "@/validators/tickets";

type TicketsMutationsWithIdParams = { ticketId: string };

export function createTicket(data: CreateTicketSchemaType) {
    return Quranara.post("/tickets", {
        body: JSON.stringify(data),
    });
}

export function createTicketMessage(params: TicketsMutationsWithIdParams, data: AnswerTicketSchemaType) {
    const url = `/tickets/${params.ticketId}/message`;

    return Quranara.post(url, {
        body: JSON.stringify(data),
    });
}

export function answerTicket(params: TicketsMutationsWithIdParams, data: AnswerTicketSchemaType) {
    const url = `/tickets/${params.ticketId}/answer`;

    return Quranara.post(url, {
        body: JSON.stringify(data),
    });
}

export function closeTicket(params: TicketsMutationsWithIdParams) {
    const url = `/tickets/${params.ticketId}/close`;

    return Quranara.patch(url);
}
