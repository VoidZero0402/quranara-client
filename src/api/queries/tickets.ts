import Quranara from "../clients/Quranara";
import { PaginationQuerySchemaType } from "@/validators/pagination";
import { convertToQueryString } from "@/libs/funcs";

type TicketsQueriesWithIdParams = { ticketId: string };

export function getTickets(query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/tickets?${queryString}`;

    return Quranara.get(url);
}

export function getTicket(params: TicketsQueriesWithIdParams) {
    const url = `/tickets/${params.ticketId}`;

    return Quranara.get(url);
}

export function getAllTickets(query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/tickets/all?${queryString}`;

    return Quranara.get(url);
}
