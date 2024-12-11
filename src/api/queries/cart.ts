import Quranara from "../clients/Quranara";

import { Response } from "@/types/response.types";
import { Cart } from "@/types/cart.types";

export function getCart(cookie: string): Promise<Response<{ cart: Cart }>> {
    return Quranara.get("/cart", {
        headers: {
            cookie,
        },
    });
}
