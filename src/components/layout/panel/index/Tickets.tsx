import { Suspense } from "react";
import Link from "next/link";

import TicketsDisplay, { TicketsDisplayLoading } from "@/components/specific/panel/index/TicketsDisplay";

import Button from "@/components/ui/Button";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";
import LongArrowLeft from "@/components/svgs/LongArrowLeft";

function Tickets() {
    return (
        <div className="space-y-8 min-[1480px]:w-1/2 py-8 px-4 sm:p-8 bg-white dark:bg-gray-850 sm:rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col items-center sm:items-start gap-y-2">
                    <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                        <ChatRoundLine className="w-8" />
                        تیکت‌های من
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">آخرین تیکت‌هایی که ایجاد کردی</p>
                </div>
                <Link href="/panel/tickets">
                    <Button size="lg" variant="text-primary">
                        مشاهده همه تیکت‌های من
                        <LongArrowLeft />
                    </Button>
                </Link>
            </div>
            <Suspense fallback={<TicketsDisplayLoading />}>
                <TicketsDisplay />
            </Suspense>
        </div>
    );
}

export default Tickets;
