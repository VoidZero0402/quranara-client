"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { unbanUser } from "@/api/mutations/users";
import { UnbanUserStatusOptions } from "@/api/errors/users";

import { statusHandler } from "@/libs/responses";

import { ENTITIES } from "@/constants/entities";

import BanUserRow from "@/components/specific/management-panel/datatable-rows/BanUserRow";

import DataTable, { DataTableHead, DataTableBody } from "@/components/ui/datatable/DataTable";

import { Ban } from "@/types/ban.types";
import { Pagination } from "@/types/response.types";

type BanUsersDataTableProps = {
    bans: Ban[];
    pagination: Pagination;
};

function BanUsersDataTable({ bans, pagination }: BanUsersDataTableProps) {
    const router = useRouter();

    const { mutate: onUnbanUser } = useMutation({
        mutationFn: unbanUser,
        onSettled(data) {
            if (data) {
                statusHandler(data, UnbanUserStatusOptions);

                if (data.success) {
                    router.refresh();
                }
            }
        },
    });

    return (
        <section>
            <DataTable entity={ENTITIES.BAN_USERS} pagination={pagination}>
                <DataTableHead>
                    <tr>
                        <th>نمایه کاربر</th>
                        <th>شماره موبایل</th>
                        <th>نام کامل</th>
                        <th>تاریخ عضویت</th>
                        <th>تاریخ مسدودیت</th>
                        <th className="shadow-white">گزینه‌های پیشرفته</th>
                    </tr>
                </DataTableHead>
                <DataTableBody>
                    {bans.map((ban) => (
                        <BanUserRow key={ban._id} ban={ban} onUnbanUser={onUnbanUser as any} />
                    ))}
                </DataTableBody>
            </DataTable>
        </section>
    );
}

export default BanUsersDataTable;
