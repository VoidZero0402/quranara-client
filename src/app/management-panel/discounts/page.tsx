import { getAllDiscounts } from "@/api/queries/discounts";

import { ENTITIES } from "@/constants/entities";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import DiscountsHeader from "@/components/layout/management-panel/discounts/DiscountsHeader";

async function Discounts({ searchParams }: { searchParams: Promise<{ page: string }> }) {
    const { page = 1 } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.DISCOUNTS);

    const { data } = await getAllDiscounts({ page: +page, limit });

    return (
        <div className="space-y-4">
            <DiscountsHeader />
        </div>
    );
}

export default Discounts;
