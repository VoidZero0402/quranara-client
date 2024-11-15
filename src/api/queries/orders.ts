import Quranara from "../clients/Quranara";
import { PaginationQuerySchemaType } from "@/validators/pagination";
import { convertToQueryString } from "@/libs/funcs";

export function getAllOrders(query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/orders/all?${queryString}`;

    return Quranara.get(url);
}

type CheckOrderParams = { shortId: string };

export function checkOrder(params: CheckOrderParams) {
    const url = `/orders/check/${params.shortId}`;

    return Quranara.get(url);
}
