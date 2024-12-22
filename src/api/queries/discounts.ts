import Quranara from "../clients/Quranara";

import { AvailableDiscountQuerySchemaType } from "@/validators/discounts";
import { PaginationQuerySchemaType } from "@/validators/pagination";

import { convertToQueryString } from "@/libs/funcs";

import { Pagination, Response } from "@/types/response.types";
import { Discount } from "@/types/discount.types";

export function getAllDiscounts(query: PaginationQuerySchemaType): Promise<Response<{ discounts: Discount[], pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/discounts?${queryString}`;

    return Quranara.get(url);
}

export function availableDiscount(query: AvailableDiscountQuerySchemaType): Promise<Response<{ available: boolean; discount: Discount }>> {
    const queryString = convertToQueryString(query);
    const url = `/discounts/available?${queryString}`;

    return Quranara.get(url);
}
