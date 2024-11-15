import Quranara from "../clients/Quranara";
import { AvailableDiscountQuerySchemaType } from "@/validators/discounts";
import { PaginationQuerySchemaType } from "@/validators/pagination";
import { convertToQueryString } from "@/libs/funcs";

export function getAllDiscounts(query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/discounts?${queryString}`;

    return Quranara.get(url)
}

export function availableDiscount(query: AvailableDiscountQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/discounts/available?${queryString}`;

    return Quranara.get(url);
}
