import LatestOrders from "@/components/specific/management-panel/index/LatestOrders";
import LatestUsers from "@/components/specific/management-panel/index/LatestUsers";

import { User } from "@/types/user.types";
import { Order } from "@/types/order.types";

type LatestsProps = {
    users: User[];
    orders: Order[];
};

function Latests({ users, orders }: LatestsProps) {
    return (
        <section className="flex flex-col xl:flex-row gap-4 p-4 sm:p-0">
            <LatestUsers users={users} />
            <LatestOrders orders={orders} />
        </section>
    );
}

export default Latests;
