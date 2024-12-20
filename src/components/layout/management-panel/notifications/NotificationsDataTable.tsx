"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";

import NotificationRow from "@/components/specific/management-panel/datatable-rows/NotificationRow";

// const UserDetailsModal = dynamic(() => import("@/components/modal/management-panel/users/UserDetailsModal"), { ssr: false });

import DataTable, { DataTableBody, Column } from "@/components/ui/datatable/DataTable";

const columns: Column[] = [
    {
        key: "title",
        text: "عنوان اعلان",
    },
    {
        key: "type",
        text: "نوع اعلان",
    },
    {
        key: "createdAt",
        text: "تاریخ ایجاد",
    },
    {
        key: "actions",
        text: "گزینه‌های پیشرفته",
    },
];

import { Notification } from "@/types/notification.types";
import { Pagination } from "@/types/response.types";

type NotificationsDataTableProps = {
    notifications: Notification[];
    pagination: Pagination;
};

function NotificationsDataTable({ notifications, pagination }: NotificationsDataTableProps) {
    return (
        <section>
            <DataTable entity={ENTITIES.NOTIFICATIONS} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {notifications.map(notification => <NotificationRow key={notification._id} notification={notification} />)}
                </DataTableBody>
            </DataTable>
        </section>
    );
}

export default NotificationsDataTable;
