"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getSeenNotifications, getUnseenNotifications } from "@/api/queries/notifications";

import { MODE } from "@/constants/notifications";

import Notification, { NotificationLoading } from "@/components/card/panel/Notification";

import { Mode } from "@/types/notification.types";

type NotificationsDisplayProps = { mode: Mode };

function NotificationsDisplay({ mode }: NotificationsDisplayProps) {
    const queryFn = async () => {
        const fn = mode === MODE.UNREAD ? getUnseenNotifications : getSeenNotifications;
        return await fn();
    };

    const {
        data: { data },
    } = useSuspenseQuery({ queryKey: [`notifications-${mode}`], queryFn });

    return <section className="space-y-4">{!!data.notifications.length ? data.notifications.map((notification) => <Notification key={notification._id} {...notification} mode={mode} />) : <EmptyState />}</section>;
}

function EmptyState() {
    return (
        <div className="flex-center col-span-4 py-10">
            <span className="font-pelak-medium text-center sm:text-lg text-gray-600 dark:text-gray-400 leading-8 sm:leading-8">اعلان جدیدی برای نمایش وجود نداره!</span>
        </div>
    );
}

export function NotificationsDisplayLoading() {
    return (
        <section className="space-y-4">
            <NotificationLoading />
            <NotificationLoading />
            <NotificationLoading />
            <NotificationLoading />
        </section>
    );
}

export default NotificationsDisplay;
