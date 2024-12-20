import { getAllNotifications } from "@/api/queries/notifications";

import { ENTITIES } from "@/constants/entities";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import NotificationsDataTable from "@/components/layout/management-panel/notifications/NotificationsDataTable";
import NotificationsHeader from "@/components/layout/management-panel/notifications/NotificationsHeader";

async function Notifications({ searchParams }: { searchParams: Promise<{ page: string }> }) {
    const { page = 1 } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.NOTIFICATIONS);

    const { data } = await getAllNotifications({ page: +page, limit });

    return (
        <div className="space-y-4">
            <NotificationsHeader />
            <NotificationsDataTable notifications={data.notifications} pagination={data.pagination} />
        </div>
    );
}

export default Notifications;
