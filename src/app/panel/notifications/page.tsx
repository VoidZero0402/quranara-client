import { Suspense } from "react";

import { MODE } from "@/constants/notifications";

import SwitchNotifications from "@/components/layout/panel/notifications/SwitchNotifications";
import NotificationsDisplay, { NotificationsDisplayLoading } from "@/components/layout/panel/notifications/NotificationsDisplay";

import BellBing from "@/components/svgs/BellBing";

async function Notifications({ searchParams }: { searchParams: Promise<{ mode: string }> }) {
    const mode = (await searchParams).mode === MODE.READ ? MODE.READ : MODE.UNREAD;

    return (
        <div className="space-y-8 py-8 px-4 sm:p-8">
            <div className="flex flex-col xl:flex-row justify-between gap-8">
                <div className="space-y-2">
                    <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                        <BellBing className="w-8" />
                        اعلانات من
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">اعلانات برای اطلاع‌رسانی‌ها یا اقدامات خاص استفاده میشن</p>
                </div>
                <SwitchNotifications mode={mode} />
            </div>
            <Suspense fallback={<NotificationsDisplayLoading />}>
                <NotificationsDisplay mode={mode} />
            </Suspense>
        </div>
    );
}

export default Notifications;
