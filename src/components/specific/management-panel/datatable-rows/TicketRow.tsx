"use client";

import { STATUS, StatusText, TypeText } from "@/constants/tickets";

import { formatDate, limitStringLength } from "@/libs/funcs";

import BadgeLight from "@/components/ui/BadgeLight";
import IconButton from "@/components/ui/IconButton";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";
import SquareTopUp from "@/components/svgs/SquareTopUp";

const StatusVarients = {
    [STATUS.ACTIVE]: "teal",
    [STATUS.SLEEP]: "secondary",
    [STATUS.COLSED]: "danger",
};

import { Ticket } from "@/types/ticket.types";

type TicketRowProps = { ticket: Ticket; onChat: (ticket: Ticket) => void; onClose: (_id: string) => void };

function TicketRow({ ticket, onChat, onClose }: TicketRowProps) {
    return (
        <tr>
            <td>{limitStringLength(ticket.title, 40)}</td>
            <td>
                <span className="underline text-amber-400">{ticket.user.username}</span>
            </td>
            <td>
                <BadgeLight varient="gray">{TypeText[ticket.type]}</BadgeLight>
            </td>
            <td>
                <BadgeLight varient={StatusVarients[ticket.status] as any}>{StatusText[ticket.status]}</BadgeLight>
            </td>
            <td>{formatDate(new Date(ticket.updatedAt ?? Date.now()))}</td>
            <td>
                <div className="flex gap-x-2">
                    <IconButton label="گفتگو" variant="teal" onClick={() => onChat(ticket)}>
                        <ChatRoundLine />
                    </IconButton>
                    {ticket.status !== STATUS.COLSED && (
                        <IconButton label="بستن تیکت" variant="danger" onClick={() => onClose(ticket._id)}>
                            <SquareTopUp />
                        </IconButton>
                    )}
                </div>
            </td>
        </tr>
    );
}

export default TicketRow;
