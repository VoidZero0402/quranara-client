import { getAllUsers } from "@/api/queries/users";

import { ENTITIES } from "@/constants/entities";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import UserRow from "@/components/specific/management-panel/datatable-rows/UserRow";

import DataTable, { DataTableHead, DataTableBody } from "@/components/ui/datatable/DataTable";
import SearchBar from "@/components/ui/SearchBar";

type UsersDataTableProps = { searchParams: Promise<{ page: string; search: string }> };

async function UsersDataTable({ searchParams }: UsersDataTableProps) {
    const { page = 1, search } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.USERS);

    const { data } = await getAllUsers({ page: +page, limit, ...(search && { search }) });

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between gap-8">
                <SearchBar query="search" className="w-72" placeholder="جستجو در کاربران قرآن‌آرا" />
            </div>
            <DataTable entity={ENTITIES.USERS} pagination={data.pagination}>
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
                    {data.users.map((user) => (
                        <UserRow key={user._id} {...user} />
                    ))}
                </DataTableBody>
            </DataTable>
        </div>
    );
}

export default UsersDataTable;
