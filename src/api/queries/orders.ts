import Quranara from "../clients/Quranara";

import { PaginationQuerySchemaType } from "@/validators/pagination";

import { convertToQueryString } from "@/libs/funcs";

import { Pagination, Response } from "@/types/response.types";
import { Order } from "@/types/order.types";

export function getAllOrders(query: PaginationQuerySchemaType): Promise<Response<{ orders: Order[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/orders/all?${queryString}`;

    return Quranara.get(url);
}

type CheckOrderParams = { shortId: string };

export function checkOrder(params: CheckOrderParams): Promise<Response<{ order: Order }>> {
    const url = `/orders/check/${params.shortId}`;

    return Quranara.get(url);
}
