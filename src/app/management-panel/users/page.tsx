import { Suspense } from "react";

import { getAllUsers } from "@/api/queries/users";

import { ENTITIES } from "@/constants/entities";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import UsersHeader from "@/components/layout/management-panel/users/UsersHeader";
import UsersDataTable from "@/components/layout/management-panel/users/UsersDataTable";
import RelatedLinks from "@/components/layout/management-panel/users/RelatedLinks";

async function Users({ searchParams }: { searchParams: Promise<{ page: string; search: string }> }) {
    const { page = 1, search } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.USERS);

    const { data } = await getAllUsers({ page: +page, limit, ...(search && { search }) });

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <UsersHeader />
                <Suspense>
                    <UsersDataTable users={data.users} pagination={data.pagination} />
                </Suspense>
            </div>
            <RelatedLinks />
        </div>
    );
}

export default Users;
