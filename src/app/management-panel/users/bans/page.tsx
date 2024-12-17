import { getAllBan } from "@/api/queries/users";

import { ENTITIES } from "@/constants/entities";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import BanUsersHeader from "@/components/layout/management-panel/users/bans/BanUsersHeader";
import BanUsersDataTable from "@/components/layout/management-panel/users/bans/BanUsersDataTable";
import RelatedLinks from "@/components/layout/management-panel/users/bans/RelatedLinks";

async function BanUsers({ searchParams }: { searchParams: Promise<{ page: string }> }) {
    const { page = 1 } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.BAN_USERS);

    const { data } = await getAllBan({ page: +page, limit })

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <BanUsersHeader />
                <BanUsersDataTable bans={data.bans} pagination={data.pagination} />
            </div>
            <RelatedLinks />
        </div>
    );
}

export default BanUsers;
