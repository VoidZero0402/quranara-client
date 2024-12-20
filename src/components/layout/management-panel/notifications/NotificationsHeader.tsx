import CreateNew from "@/components/specific/management-panel/notifications/CreateNew";

import NotificationUnreadLines from "@/components/svgs/NotificationUnreadLines";

function NotificationsHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 p-4 sm:p-0">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <NotificationUnreadLines className="w-8" />
                    مدیریت اعلانات
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">کاربران خودت رو از آخرین تغییرات باخبر کن!</p>
            </div>
            <CreateNew />
        </div>
    );
}

export default NotificationsHeader;
