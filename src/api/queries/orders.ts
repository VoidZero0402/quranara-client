import Quranara from "../clients/Quranara";

import { PaginationQuerySchemaType } from "@/validators/pagination";

import { Pagination, Response } from "@/types/response.types";
import { Order } from "@/types/order.types";

export function getAllOrders(query: PaginationQuerySchemaType): Promise<Response<{ orders: Order[]; pagination: Pagination }>> {
    return Quranara.get("/orders/all", {
        query,
    });
}

type CheckOrderParams = { shortId: string };

export function checkOrder(params: CheckOrderParams, cookie: string): Promise<Response<{ order: Order }>> {
    const url = `/orders/check/${params.shortId}`;

    return Quranara.get(url, {
        headers: {
            cookie,
        },
    });
}
