import Quranara from "../clients/Quranara";
import { CreateDiscountSchemaType } from "@/validators/discounts";

type DiscountsMutationsWithIdParams = { discountId: string };

export function createDiscount(data: CreateDiscountSchemaType) {
    return Quranara.post("/discounts", {
        body: JSON.stringify(data),
    });
}

export function updateDiscount(params: DiscountsMutationsWithIdParams, data: CreateDiscountSchemaType) {
    const url = `/discounts/${params.discountId}`;

    return Quranara.post(url, {
        body: JSON.stringify(data),
    });
}

export function removeDiscount(params: DiscountsMutationsWithIdParams) {
    const url = `/discounts/${params.discountId}`;

    return Quranara.delete(url);
}
