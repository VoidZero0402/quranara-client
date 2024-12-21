import { getAllTickets } from "@/api/queries/tickets";

import { ENTITIES } from "@/constants/entities";

import { FILTER__STATUSES } from "@/constants/tickets";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import TicketsHeader from "@/components/layout/management-panel/tickets/TicketsHeader";
import TicketsDataTable from "@/components/layout/management-panel/tickets/TicketsDataTable";

import { Status } from "@/types/ticket.types";

async function Tickets({ searchParams }: { searchParams: Promise<{ page: string; status: Status }> }) {
    const { page = 1, status: statusParam } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.TICKETS);

    const status = (FILTER__STATUSES.includes(statusParam) && statusParam) as any;

    const { data } = await getAllTickets({ page: +page, limit, ...(status && { status }) });    

    return (
        <div className="space-y-4">
            <TicketsHeader />
            <TicketsDataTable tickets={data.tickets} pagination={data.pagination} />
        </div>
    );
}

export default Tickets;
