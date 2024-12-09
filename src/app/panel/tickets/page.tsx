import Link from "next/link";

import Button from "@/components/ui/Button";

import Plain from "@/components/svgs/Plain";
import ChatRoundLine from "@/components/svgs/ChatRoundLine";

function Tickets() {
    return (
        <div className="space-y-8 py-8 px-4 sm:p-8">
            <div className="flex items-center justify-between gap-8">
                <div className="space-y-2">
                    <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                        <ChatRoundLine className="w-8" />
                        تیکت‌های من
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">با تیکت‌ها میتونی مشکلات خودت رو با مدیریت در میون بزاری</p>
                </div>
                <Link href="/panel/tickets/new">
                    <Button size="lg">
                        <Plain />
                        ایجاد تیکت جدید
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Tickets;
