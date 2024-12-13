import { MODE } from "@/constants/notifications";

import SeenNotificationButton from "@/components/specific/panel/notifications/SeenNotificationButton";

import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";
import Button from "@/components/ui/Button";

import BellOff from "@/components/svgs/BellOff";

import { Mode, type Notification } from "@/types/notification.types";

type NotificationProps = Notification & { mode: Mode };

function Notification({ identifier, title, description, mode }: NotificationProps) {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-center shrink-0 size-16 gray-light rounded-full">
                    <BellOff className="w-8" />
                </div>
                <div className="space-y-2 text-center sm:text-start">
                    <span className="font-pelak-medium text-gray-800 dark:text-gray-200 leading-8">{title}</span>
                    <p className="text-gray-600 dark:text-gray-400 leading-7">{description}</p>
                </div>
            </div>
            {mode === MODE.UNREAD && <SeenNotificationButton identifier={identifier} />}
        </div>
    );
}

export function NotificationLoading() {
    return (
        <Skeleton>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                    <SkeletonFrame className="size-16 shrink-0 rounded-full"></SkeletonFrame>
                    <div className="space-y-2 w-full">
                        <SkeletonFrame className="w-3/4 h-8"></SkeletonFrame>
                        <SkeletonFrame className="w-full h-7"></SkeletonFrame>
                    </div>
                </div>
            </div>
        </Skeleton>
    );
}

export default Notification;
