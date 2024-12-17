"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";

import UserRow from "@/components/specific/management-panel/datatable-rows/UserRow";

const UserDetailsModal = dynamic(() => import("@/components/modal/management-panel/users/UserDetailsModal"), { ssr: false });
const SignCourseModal = dynamic(() => import("@/components/modal/management-panel/users/SignCourseModal"), { ssr: false });
const SendUserNotificationModal = dynamic(() => import("@/components/modal/management-panel/users/SendUserNotificationModal"), { ssr: false });
const BanUserModal = dynamic(() => import("@/components/modal/management-panel/users/BanUserModal"), { ssr: false });

import DataTable, { DataTableBody, Column } from "@/components/ui/datatable/DataTable";

const columns: Column[] = [
    {
        key: "profile",
        text: "نمایه کاربر",
    },
    {
        key: "phone",
        text: "شماره موبایل",
    },
    {
        key: "fullname",
        text: "نام کامل",
    },
    {
        key: "createdAt",
        text: "تاریخ عضویت",
    },
    {
        key: "actions",
        text: "گزینه‌های پیشرفته",
    },
];


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
    const { isOpen: isOpenBanUserModal, open: openBanUserModal, close: closeBanUserModal, props: banUserModalProps } = useToggleState<{ user: Pick<User, "_id" | "username" | "phone"> }>();

    const onDetails = useCallback((user: User) => {
        openDetailsModal({ user });
    }, []);

    const onSignCourse = useCallback((payload: { user: Pick<User, "_id" | "username"> }) => {
        openSignCourseModal(payload);
    }, []);

    const onSendNotification = useCallback((_id: string) => {
        openNotificationModal({ _id });
    }, []);

    const onBanUser = useCallback((payload: { user: Pick<User, "_id" | "username" | "phone"> }) => {
        openBanUserModal(payload);
    }, []);

    return (
        <section>
            <DataTable entity={ENTITIES.USERS} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {users.map((user) => (
                        <UserRow key={user._id} user={user} onDetails={onDetails} onSignCourse={onSignCourse} onSendNotification={onSendNotification} onBanUser={onBanUser} />
                    ))}
                </DataTableBody>
            </DataTable>
            <UserDetailsModal isOpen={isOpenDetailsModal} onClose={closeDetailsModal} {...detailsModalProps} />
            <SignCourseModal isOpen={isOpenSignCourseModal} onClose={closeSignCourseModal} {...signCourseModalProps} />
            <SendUserNotificationModal isOpen={isOpenNotificationModal} onClose={closeNotificationModal} {...notificationModalProps} />
            <BanUserModal isOpen={isOpenBanUserModal} onClose={closeBanUserModal} {...banUserModalProps} />
        </section>
    );
}

export default UsersDataTable;
