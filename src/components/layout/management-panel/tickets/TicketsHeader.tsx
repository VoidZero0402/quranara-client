import Filters from "@/components/specific/management-panel/tickets/Filters";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";

function TicketsHeader() {
    return (
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 p-4 sm:p-0">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <ChatRoundLine className="w-8" />
                    مدیریت تیکت‌ها
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">تیکت‌های کاربران رو مدیریت کن و باهاشون تعامل کن</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <Filters />
            </div>
        </div>
    );
}

export default TicketsHeader;
