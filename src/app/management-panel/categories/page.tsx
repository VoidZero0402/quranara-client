import { getCategories } from "@/api/queries/categories";

import { ENTITIES } from "@/constants/entities";
import { SOURCES, FILTER__SOURCES } from "@/constants/categories";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import CategoriesHeader from "@/components/layout/management-panel/categories/CategoriesHeader";
import CategoriesDataTable from "@/components/layout/management-panel/categories/CategoriesDataTable";

async function Categories({ searchParams }: { searchParams: Promise<{ page: string; source: string }> }) {
    const { page = 1, source = SOURCES.ALL } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.CATEGORIES);

    const ref = (FILTER__SOURCES.includes(source) ? source : SOURCES.ALL) as any;

    const { data } = await getCategories({ page: +page, limit, ...(ref !== SOURCES.ALL && { ref }) });

    return (
        <div className="space-y-4">
            <CategoriesHeader />
            <CategoriesDataTable categories={data.categories} pagination={data.pagination} />
        </div>
    );
}

export default Categories;
