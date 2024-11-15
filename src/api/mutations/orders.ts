import { CreateOrderSchemaType } from "@/validators/orders";
import Quranara from "../clients/Quranara";

export function createOrder(data: CreateOrderSchemaType) {
    return Quranara.post("/orders", {
        body: JSON.stringify(data),
    });
}
