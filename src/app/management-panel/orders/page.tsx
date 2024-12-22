import { getAllOrders } from "@/api/queries/orders";

import { ENTITIES } from "@/constants/entities";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import OrdersHeader from "@/components/layout/management-panel/orders/OrdersHeader";
import OrdersDataTable from "@/components/layout/management-panel/orders/OrdersDataTable";

async function Orders({ searchParams }: { searchParams: Promise<{ page: string }> }) {
    const { page = 1 } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.ORDERS);

    const { data } = await getAllOrders({ page: +page, limit });

    return (
        <div className="space-y-4">
            <OrdersHeader />
            <OrdersDataTable orders={data.orders} pagination={data.pagination} />
        </div>
    );
}

export default Orders;
