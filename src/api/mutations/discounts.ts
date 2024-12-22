import Quranara from "../clients/Quranara";

import { CreateDiscountSchemaType, UpdateDiscountSchemaType } from "@/validators/discounts";

import { MessageResponse } from "@/types/response.types";

type DiscountsMutationsWithIdParams = { discountId: string };

export function createDiscount(data: CreateDiscountSchemaType): MessageResponse {
    return Quranara.post("/discounts", {
        body: JSON.stringify(data),
    });
}

export function updateDiscount(params: DiscountsMutationsWithIdParams, data: UpdateDiscountSchemaType): MessageResponse {
    const url = `/discounts/${params.discountId}`;

    return Quranara.put(url, {
        body: JSON.stringify(data),
    });
}

export function removeDiscount(params: DiscountsMutationsWithIdParams): MessageResponse {
    const url = `/discounts/${params.discountId}`;

    return Quranara.delete(url);
}
