"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";

import UserRow from "@/components/specific/management-panel/datatable-rows/UserRow";

const UserDetailsModal = dynamic(() => import("@/components/modal/management-panel/users/UserDetailsModal"), { ssr: false });
const SignCourseModal = dynamic(() => import("@/components/modal/management-panel/users/SignCourseModal"), { ssr: false });
const SendUserNotificationModal = dynamic(() => import("@/components/modal/management-panel/users/SendUserNotificationModal"), { ssr: false });

import DataTable, { DataTableHead, DataTableBody } from "@/components/ui/datatable/DataTable";

import { User } from "@/types/user.types";
import { Pagination } from "@/types/response.types";

type UsersDataTableProps = {
    users: User[];
    pagination: Pagination;
};

function UsersDataTable({ users, pagination }: UsersDataTableProps) {
    const { isOpen: isOpenDetailsModal, open: openDetailsModal, close: closeDetailsModal, props: detailsModalProps } = useToggleState<{ user: User }>();
    const { isOpen: isOpenSignCourseModal, open: openSignCourseModal, close: closeSignCourseModal, props: signCourseModalProps } = useToggleState<{ user: Pick<User, "_id" | "username"> }>();
    const { isOpen: isOpenNotificationModal, open: openNotificationModal, close: closeNotificationModal, props: notificationModalProps } = useToggleState<{ _id: string }>();

    const onDetails = useCallback((user: User) => {
        openDetailsModal({ user });
    }, []);

    const onSignCourse = useCallback((data: { user: Pick<User, "_id" | "username"> }) => {
        openSignCourseModal(data);
    }, []);

    const onSendNotification = useCallback((_id: string) => {
        openNotificationModal({ _id });
    }, []);

    return (
        <section className="space-y-8">
            <DataTable entity={ENTITIES.USERS} pagination={pagination}>
                <DataTableHead>
                    <tr>
                        <th>نمایه کاربر</th>
                        <th>شماره موبایل</th>
                        <th>نام کامل</th>
                        <th>تاریخ عضویت</th>
                        <th className="shadow-white">گزینه‌های پیشرفته</th>
                    </tr>
                </DataTableHead>
                <DataTableBody>
                    {users.map((user) => (
                        <UserRow key={user._id} user={user} onDetails={onDetails} onSignCourse={onSignCourse} onSendNotification={onSendNotification} />
                    ))}
                </DataTableBody>
            </DataTable>
            <UserDetailsModal isOpen={isOpenDetailsModal} onClose={closeDetailsModal} {...detailsModalProps} />
            <SignCourseModal isOpen={isOpenSignCourseModal} onClose={closeSignCourseModal} {...signCourseModalProps} />
            <SendUserNotificationModal isOpen={isOpenNotificationModal} onClose={closeNotificationModal} {...notificationModalProps} />
        </section>
    );
}

export default UsersDataTable;
