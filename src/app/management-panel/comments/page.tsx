import { getAllComments } from "@/api/queries/comments";

import { ENTITIES } from "@/constants/entities";
import { SOURCE, FILTER__STATUSES, FILTER__SOURCES } from "@/constants/comments";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";
import CommentsHeader from "@/components/layout/management-panel/comments/CommentsHeader";
import CommentsDataTable from "@/components/layout/management-panel/comments/CommentsDataTable";

async function Comments({ searchParams }: { searchParams: Promise<{ page: string; source: string; status: string }> }) {
    const { page = 1, source: sourceParam, status: statusParam } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.COMMENTS);

    const source = (FILTER__SOURCES.includes(sourceParam) ? sourceParam : SOURCE.COURSE) as any;
    const status = (FILTER__STATUSES.includes(statusParam) && statusParam) as any;

    const { data } = await getAllComments({ page: +page, limit, source, ...(status && { status }) });

    return (
        <div className="space-y-4">
            <CommentsHeader />
            <CommentsDataTable comments={data.comments} pagination={data.pagination} source={source} />
        </div>
    );
}

export default Comments;
