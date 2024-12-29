import { getAllTvs } from "@/api/queries/tv";

import { ENTITIES } from "@/constants/entities";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import TvsHeader from "@/components/layout/management-panel/tvs/TvsHeader";
import TvsDataTable from "@/components/layout/management-panel/tvs/TvsDataTable";
 
async function Tvs({ searchParams }: { searchParams: Promise<{ page: string }> }){
    const { page = 1 } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.TVS);

    const { data } = await getAllTvs({ page: +page, limit, sort: "newest" });

    return (
        <div className="space-y-4">
            <TvsHeader />
            <TvsDataTable tvs={data.tvs} pagination={data.pagination} />
        </div>
    );
}

export default Tvs;
