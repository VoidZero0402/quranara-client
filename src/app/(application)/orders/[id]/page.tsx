import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { checkOrder } from "@/api/queries/orders";

import { STATUS } from "@/constants/orders";

import Fail from "@/components/specific/orders/Fail";
import Success from "@/components/specific/orders/Success";

async function Orders({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const { data, status } = await checkOrder({ shortId: id }, (await cookies()).toString());

    if (status !== 200) {
        redirect("/");
    }

    return <main className="flex-center my-20 font-pelak-medium text-center">{data.order.status === STATUS.SUCCESSFUL ? <Success username={data.order.user.username} /> : <Fail username={data.order.user.username} />}</main>;
}

export default Orders;
