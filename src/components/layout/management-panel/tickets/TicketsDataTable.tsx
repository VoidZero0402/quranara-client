"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useMutation } from "@tanstack/react-query";

import { closeTicket } from "@/api/mutations/tickets";
import { CloseTicketStatusOptions } from "@/api/errors/tickets";

import { statusHandler } from "@/libs/responses";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";

import TicketRow from "@/components/specific/management-panel/datatable-rows/TicketRow";

const ChatOffCanvas = dynamic(() => import("@/components/specific/management-panel/tickets/ChatOffCanvas"), { ssr: false });

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

import { Ticket } from "@/types/ticket.types";
import { Pagination } from "@/types/response.types";

type TicketsDataTableProps = {
    tickets: Ticket[];
    pagination: Pagination;
};

function TicketsDataTable({ tickets, pagination }: TicketsDataTableProps) {
    const router = useRouter();

    const { isOpen: isOpenChatOffCanvas, open: openChatOffCanvas, close: closeChatOffCanvas, props: chatOffCanvasProps } = useToggleState<{ ticket: Ticket }>();

    const onChat = useCallback((ticket: Ticket) => {
        openChatOffCanvas({ ticket });
    }, []);

    const { mutate: close } = useMutation({
        mutationFn: (_id: string) => closeTicket({ ticketId: _id }),
        async onSettled(data) {
            if (data) {
                statusHandler(data, CloseTicketStatusOptions);

                if (data.success) {
                    router.refresh();
                }
            }
        },
    });

    return (
        <section>
            <DataTable entity={ENTITIES.TICKETS} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {tickets.map((ticket) => (
                        <TicketRow key={ticket._id} ticket={ticket} onChat={onChat} onClose={close} />
                    ))}
                </DataTableBody>
            </DataTable>
            <ChatOffCanvas isOpen={isOpenChatOffCanvas} onClose={closeChatOffCanvas} {...chatOffCanvasProps} />
        </section>
    );
}

export default TicketsDataTable;
