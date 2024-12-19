import { getAllNews } from "@/api/queries/news";

import { ENTITIES } from "@/constants/entities";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import NewsHeader from "@/components/layout/management-panel/news/NewsHeader";
import NewsDataTable from "@/components/layout/management-panel/news/NewsDataTable";

async function News({ searchParams }: { searchParams: Promise<{ page: string }> }) {
    const { page = 1 } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.NEWS);

    const { data } = await getAllNews({ page: +page, limit });

    return (
        <div className="space-y-4">
            <NewsHeader />
            <NewsDataTable newses={data.news} pagination={data.pagination} />
        </div>
    );
}

export default News;
