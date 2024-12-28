import { getAllTvs } from "@/api/queries/tv";

import { ENTITIES } from "@/constants/entities";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import TvsHeader from "@/components/layout/management-panel/tvs/TvsHeader";

async function Tvs({ searchParams }: { searchParams: Promise<{ page: string }> }) {
    const { page = 1 } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.TVS);

    const { data } = await getAllTvs({ page: +page, limit, sort: "default" });

    return (
        <div className="space-y-4">
            <TvsHeader />
        </div>
    );
}

export default Tvs;
