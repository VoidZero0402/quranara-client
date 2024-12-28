import Quranara from "../clients/Quranara";

import { AvailableDiscountQuerySchemaType } from "@/validators/discounts";
import { PaginationQuerySchemaType } from "@/validators/pagination";

import { Pagination, Response } from "@/types/response.types";
import { Discount } from "@/types/discount.types";

export function getAllDiscounts(query: PaginationQuerySchemaType): Promise<Response<{ discounts: Discount[]; pagination: Pagination }>> {
    return Quranara.get("/discounts", {
        query,
    });
}

export function availableDiscount(query: AvailableDiscountQuerySchemaType): Promise<Response<{ available: boolean; discount: Discount }>> {
    return Quranara.get("/discounts/available", {
        query,
    });
}
