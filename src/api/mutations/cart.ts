import Quranara from "../clients/Quranara";

type CartActionsProps = { course: string };

export function addToCart(data: CartActionsProps) {
    return Quranara.patch("/cart/add", {
        body: JSON.stringify(data),
    });
}

export function removeFromCart(data: CartActionsProps) {
    return Quranara.patch("/cart/remove", {
        body: JSON.stringify(data),
    });
}
