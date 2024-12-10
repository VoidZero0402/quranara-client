import Link from "next/link";

import { formatDate } from "@/libs/funcs";

import Status from "@/components/ui/Status";
import Badge from "@/components/ui/Badge";
import Slice from "@/components/ui/Slice";
import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";

import { LimitedTicket } from "@/types/ticket.types";

function Ticket({ _id, title, description, shortId, status, createdAt }: LimitedTicket) {
    return (
        <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <Link href={`/panel/tickets/${_id}/tracking`} className="font-pelak-medium sm:text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-amber-400 line-clamp-2 leading-8 transition-all">
                {title}
            </Link>
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-x-2">
                        <ChatRoundLine />
                        تیکت شما
                    </span>
                    <Badge>تیکت با شناسه {shortId}</Badge>
                </div>
                <p className="h-14 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-7 sm:leading-7 line-clamp-2">{description}</p>
            </div>
            <Slice className="dark:opacity-50" />
            <div className="flex items-center justify-between font-pelak-medium">
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{formatDate(new Date(createdAt))}</span>
                <Status status={status} />
            </div>
        </div>
    );
}

export function TicketLoading() {
    return (
        <Skeleton>
            <div className="space-y-4 p-4">
                <SkeletonFrame className="h-7 w-4/5"></SkeletonFrame>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <SkeletonFrame className="h-6 w-28"></SkeletonFrame>
                        <SkeletonFrame className="h-6 w-28"></SkeletonFrame>
                    </div>
                    <div className="space-y-1.5">
                        <SkeletonFrame className="h-5"></SkeletonFrame>
                        <SkeletonFrame className="h-5 w-3/4"></SkeletonFrame>
                    </div>
                </div>
                <Slice className="dark:opacity-50" />
                <div className="flex items-center justify-between">
                    <SkeletonFrame className="h-6 w-32"></SkeletonFrame>
                    <SkeletonFrame className="h-10 w-32 rounded-lg"></SkeletonFrame>
                </div>
            </div>
        </Skeleton>
    );
}

export default Ticket;
