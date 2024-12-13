import Link from "next/link";

import { formatDate } from "@/libs/funcs";

import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";
import Badge from "@/components/ui/Badge";
import Status from "@/components/ui/Status";

import { LimitedTicket } from "@/types/ticket.types";

function Ticket({ _id, title, shortId, createdAt, status }: LimitedTicket) {
    return (
        <Link href={`/panel/tickets/${_id}/tracking`} className="block space-y-4 p-4 bg-gray-50 dark:bg-gray-800 font-pelak-medium rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-sm sm:text-base leading-7 sm:line-clamp-1">{title}</span>
                <Badge className="shrink-0">تیکت با شناسه {shortId}</Badge>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{formatDate(new Date(createdAt))}</span>
                <Status status={status} />
            </div>
        </Link>
    );
}

export function TicketLoading() {
    return (
        <Skeleton>
            <div className="block space-y-4 p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <SkeletonFrame className="w-3/4 h-6"></SkeletonFrame>
                    <SkeletonFrame className="w-24 h-6"></SkeletonFrame>
                </div>
                <div className="flex items-center justify-between">
                    <SkeletonFrame className="w-1/4 h-6"></SkeletonFrame>
                    <SkeletonFrame className="w-32 h-10"></SkeletonFrame>
                </div>
            </div>
        </Skeleton>
    );
}

export default Ticket;
