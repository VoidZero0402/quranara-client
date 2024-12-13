import { cookies } from "next/headers";
import Link from "next/link";

import { getTickets } from "@/api/queries/tickets";

import Ticket, { TicketLoading } from "./Ticket";

import Button from "@/components/ui/Button";

import LinkCircle from "@/components/svgs/LinkCircle";

async function TicketsDisplay() {
    const { data } = await getTickets({ page: 1, limit: 4 }, (await cookies()).toString());

    return (
        <>
            {!!data.tickets.length ? (
                <div className="space-y-4">
                    {data.tickets.map((ticket) => (
                        <Ticket key={ticket._id} {...ticket} />
                    ))}
                </div>
            ) : (
                <EmptyState />
            )}
        </>
    );
}

function EmptyState() {
    return (
        <div className="flex-center flex-col gap-4">
            <div className="space-y-2 text-center">
                <span className="font-pelak-medium text-xl text-gray-800 dark:text-gray-200 leading-8">هنوز هیچ تیکتی رو ایجاد نکردی</span>
                <p className="text-gray-600 dark:text-gray-400 leading-7">اگه مشکلی داری یا دوست داری با مدیریت صحبت کنی میتونی از تیکت استفاده کنی</p>
            </div>
            <Link href="/courses">
                <Button size="lg">
                    <LinkCircle />
                    ایجاد اولین تیکت
                </Button>
            </Link>
        </div>
    );
}

export function TicketsDisplayLoading() {
    return (
        <div className="space-y-4">
            <TicketLoading />
            <TicketLoading />
            <TicketLoading />
            <TicketLoading />
        </div>
    );
}

export default TicketsDisplay;
