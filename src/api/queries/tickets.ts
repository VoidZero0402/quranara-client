import Quranara from "../clients/Quranara";

import { GetAllTicketsQuerySchemaType } from "@/validators/tickets";
import { PaginationQuerySchemaType } from "@/validators/pagination";

import { Pagination, Response } from "@/types/response.types";
import { LimitedTicket, Ticket } from "@/types/ticket.types";

type TicketsQueriesWithIdParams = { ticketId: string };

export function getTickets(query: PaginationQuerySchemaType, cookie?: string): Promise<Response<{ tickets: LimitedTicket[]; pagination: Pagination }>> {
    return Quranara.get("/tickets", {
        query,
        headers: {
            ...(cookie !== undefined && { cookie }),
        },
    });
}

export function getTicket(params: TicketsQueriesWithIdParams, cookie: string): Promise<Response<{ ticket: Ticket }>> {
    const url = `/tickets/${params.ticketId}`;

    return Quranara.get(url, {
        headers: {
            cookie,
        },
    });
}

export function getAllTickets(query: GetAllTicketsQuerySchemaType): Promise<Response<{ tickets: Ticket[]; pagination: Pagination }>> {
    return Quranara.get("/tickets/all", {
        query,
    });
}
