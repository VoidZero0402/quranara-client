import { cookies } from "next/headers";

import { getLastUnseenNotification } from "@/api/queries/notifications";

import SeenNotificationButton from "@/components/specific/panel/notifications/SeenNotificationButton";

import BellOff from "@/components/svgs/BellOff";

async function LastNotification() {
    const { data } = await getLastUnseenNotification((await cookies()).toString());

    return (
        <>
            {data.notification && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white dark:bg-gray-850 sm:rounded-2xl">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex-center shrink-0 size-16 gray-light rounded-full">
                            <BellOff className="w-8" />
                        </div>
                        <div className="space-y-2 text-center sm:text-start">
                            <span className="font-pelak-medium text-gray-800 dark:text-gray-200 line-clamp-1">{data.notification.title}</span>
                            <p className="text-gray-600 dark:text-gray-400 leading-7 line-clamp-3 sm:line-clamp-2">{data.notification.description}</p>
                        </div>
                    </div>
                    <SeenNotificationButton identifier={data.notification.identifier} />
                </div>
            )}
        </>
    );
}

export default LastNotification;
