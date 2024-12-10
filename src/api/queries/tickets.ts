import Quranara from "../clients/Quranara";

import { PaginationQuerySchemaType } from "@/validators/pagination";

import { convertToQueryString } from "@/libs/funcs";

import { Pagination, Response } from "@/types/response.types";
import { LimitedTicket, Ticket } from "@/types/ticket.types";

type TicketsQueriesWithIdParams = { ticketId: string };

export function getTickets(query: PaginationQuerySchemaType): Promise<Response<{ tickets: LimitedTicket[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/tickets?${queryString}`;

    return Quranara.get(url);
}

export function getTicket(params: TicketsQueriesWithIdParams, cookie: string): Promise<Response<{ ticket: Ticket }>> {
    const url = `/tickets/${params.ticketId}`;

    return Quranara.get(url, {
        headers: {
            cookie
        }
    });
}

export function getAllTickets(query: PaginationQuerySchemaType): Promise<Response<{ tickets: LimitedTicket[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/tickets/all?${queryString}`;

    return Quranara.get(url);
}
