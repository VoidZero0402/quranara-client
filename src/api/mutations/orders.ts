import Quranara from "../clients/Quranara";

import { CreateOrderSchemaType } from "@/validators/orders";

import { Response } from "@/types/response.types";

export function createOrder(data: CreateOrderSchemaType): Promise<Response<{ message: string; paymentUrl: string }>> {
    return Quranara.post("/orders", {
        body: JSON.stringify(data),
    });
}
