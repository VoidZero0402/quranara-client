import Quranara from "../clients/Quranara";

import { MessageResponse } from "@/types/response.types";

type CartActionsProps = { course: string };

export function addToCart(data: CartActionsProps): MessageResponse {
    return Quranara.patch("/cart/add", {
        body: JSON.stringify(data),
    });
}

export function removeFromCart(data: CartActionsProps): MessageResponse {
    return Quranara.patch("/cart/remove", {
        body: JSON.stringify(data),
    });
}
