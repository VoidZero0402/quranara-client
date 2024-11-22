import Quranara from "../clients/Quranara";
import { CreateOrderSchemaType } from "@/validators/orders";

export function createOrder(data: CreateOrderSchemaType) {
    return Quranara.post("/orders", {
        body: JSON.stringify(data),
    });
}
