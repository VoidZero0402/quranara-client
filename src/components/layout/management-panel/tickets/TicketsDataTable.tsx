"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";

import TicketRow from "@/components/specific/management-panel/datatable-rows/TicketRow";

// const UpdateCategoryModal = dynamic(() => import("@/components/modal/management-panel/categories/UpdateCategoryModal"), { ssr: false });

import DataTable, { DataTableBody, Column } from "@/components/ui/datatable/DataTable";

const columns: Column[] = [
    {
        key: "title",
        text: "عنوان",
    },
    {
        key: "user",
        text: "کاربر",
    },
    {
        key: "type",
        text: "نوع تیکت",
    },
    {
        key: "status",
        text: "وضعیت",
    },
    {
        key: "updatedAt",
        text: "آخرین بروزرسانی",
    },
    {
        key: "actions",
        text: "گزینه‌های پیشرفته",
    },
];

import { LimitedTicket } from "@/types/ticket.types";
import { Pagination } from "@/types/response.types";

type TicketsDataTableProps = {
    tickets: LimitedTicket[];
    pagination: Pagination;
};

function TicketsDataTable({ tickets, pagination }: TicketsDataTableProps) {
    return <section>
        <DataTable entity={ENTITIES.TICKETS} columns={columns} pagination={pagination}>
            <DataTableBody>
                {tickets.map(ticket => <TicketRow key={ticket._id} ticket={ticket} />)}
            </DataTableBody>
        </DataTable>
    </section>;
}

export default TicketsDataTable;
