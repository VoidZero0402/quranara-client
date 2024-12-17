import { Suspense } from "react";

import { getAllUsers } from "@/api/queries/users";

import { ENTITIES } from "@/constants/entities";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import UsersDataTable from "@/components/layout/management-panel/users/UsersDataTable";
import UsersHeader from "@/components/layout/management-panel/users/UsersHeader";

async function Users({ searchParams }: { searchParams: Promise<{ page: string; search: string }> }) {
    const { page = 1, search } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.USERS);

    const { data } = await getAllUsers({ page: +page, limit, ...(search && { search }) });

    return (
        <div className="space-y-4 mt-4">
            <UsersHeader />
            <UsersDataTable users={data.users} pagination={data.pagination} />
        </div>
    );
}

export default Users;
