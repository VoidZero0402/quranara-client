import { Suspense } from "react";
import Link from "next/link";

import TicketsGrid, { TicketsGridLoading } from "@/components/layout/panel/tickets/TicketsGrid";

import Button from "@/components/ui/Button";

import Plain from "@/components/svgs/Plain";
import ChatRoundLine from "@/components/svgs/ChatRoundLine";

function Tickets() {
    return (
        <div className="space-y-8 py-8 px-4 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-2">
                    <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                        <ChatRoundLine className="w-8" />
                        تیکت‌های من
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">با تیکت‌ها میتونی مشکلات خودت رو با مدیریت در میون بزاری</p>
                </div>
                <Link href="/panel/tickets/new">
                    <Button size="lg" className="w-full sm:w-max">
                        <Plain />
                        ایجاد تیکت جدید
                    </Button>
                </Link>
            </div>
            <Suspense fallback={<TicketsGridLoading />}>
                <TicketsGrid />
            </Suspense>
        </div>
    );
}

export default Tickets;
