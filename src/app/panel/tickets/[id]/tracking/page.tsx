import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { getTicket } from "@/api/queries/tickets";

import Messages from "@/components/layout/panel/tickets/Messages";

import TrackingTicketForm from "@/components/form/template/panel/TrackingTicketForm";

import Slice from "@/components/ui/Slice";
import Status from "@/components/ui/Status";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";

async function TrackingTicket({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const {
        data: { ticket },
        status,
    } = await getTicket({ ticketId: id }, (await cookies()).toString());

    if (status === 404 || status === 403) {
        notFound();
    }

    return (
        <div className="space-y-4 sm:space-y-8 py-8 px-4 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="font-pelak-medium text-lg text-gray-700 dark:text-gray-300 sm:line-clamp-1">{ticket.title}</span>
                <Status status={ticket.status} />
            </div>
            <Slice className="dark:opacity-25" />
            <Messages messages={ticket.messages} />
            <div className="space-y-4 sm:space-y-8 py-8 sm:p-8 bg-transparent sm:bg-gray-50 sm:dark:bg-gray-800 rounded-xl">
                <div className="space-y-2">
                    <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                        <ChatRoundLine className="w-8" />
                        ایجاد پیام جدید
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">تا زمانی که مشکلت به شکل کامل حل بشه میتونی با مدیریت صحبت کنی</p>
                </div>
                <TrackingTicketForm _id={ticket._id} />
            </div>
        </div>
    );
}

export default TrackingTicket;
