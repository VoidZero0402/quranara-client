import Quranara from "../clients/Quranara";

import { CreateDiscountSchemaType } from "@/validators/discounts";

import { MessageResponse } from "@/types/response.types";

type DiscountsMutationsWithIdParams = { discountId: string };

export function createDiscount(data: CreateDiscountSchemaType): MessageResponse {
    return Quranara.post("/discounts", {
        body: JSON.stringify(data),
    });
}

export function updateDiscount(params: DiscountsMutationsWithIdParams, data: CreateDiscountSchemaType): MessageResponse {
    const url = `/discounts/${params.discountId}`;

    return Quranara.post(url, {
        body: JSON.stringify(data),
    });
}

export function removeDiscount(params: DiscountsMutationsWithIdParams): MessageResponse {
    const url = `/discounts/${params.discountId}`;

    return Quranara.delete(url);
}
