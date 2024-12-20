"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";

import NotificationRow from "@/components/specific/management-panel/datatable-rows/NotificationRow";

const PreviewNotificationModal = dynamic(() => import("@/components/modal/management-panel/notifications/PreviewNotificationModal"), { ssr: false });
const UpdateNotificationModal = dynamic(() => import("@/components/modal/management-panel/notifications/UpdateNotificationModal"), { ssr: false });
const RemoveNotificationModal = dynamic(() => import("@/components/modal/management-panel/notifications/RemoveNotificationModal"), { ssr: false });

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
    const { isOpen: isOpenPreviewModal, open: openPreviewModal, close: closePreviewModal, props: previewModalProps } = useToggleState<{ notification: Notification }>();
    const { isOpen: isOpenUpdateModal, open: openUpdateModal, close: closeUpdateModal, props: updateModalProps } = useToggleState<{ notification: Notification }>();
    const { isOpen: isOpenRemoveModal, open: openRemoveModal, close: closeRemoveModal, props: removeModalProps } = useToggleState<{ notification: Pick<Notification, "_id" | "title"> }>();

    const onPreview = useCallback((notification: Notification) => {
        openPreviewModal({ notification });
    }, []);

    const onUpdate = useCallback((notification: Notification) => {
        openUpdateModal({ notification });
    }, []);

    const onRemove = useCallback((notification: Pick<Notification, "_id" | "title">) => {
        openRemoveModal({ notification });
    }, []);

    return (
        <section>
            <DataTable entity={ENTITIES.NOTIFICATIONS} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {notifications.map((notification) => (
                        <NotificationRow key={notification._id} notification={notification} onPreview={onPreview} onUpdate={onUpdate} onRemove={onRemove} />
                    ))}
                </DataTableBody>
            </DataTable>
            <PreviewNotificationModal isOpen={isOpenPreviewModal} onClose={closePreviewModal} {...previewModalProps} />
            <UpdateNotificationModal isOpen={isOpenUpdateModal} onClose={closeUpdateModal} {...updateModalProps} />
            <RemoveNotificationModal isOpen={isOpenRemoveModal} onClose={closeRemoveModal} {...removeModalProps} />
        </section>
    );
}

export default NotificationsDataTable;
