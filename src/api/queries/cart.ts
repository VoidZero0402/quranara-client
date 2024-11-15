import Quranara from "../clients/Quranara";

export function getCart() {
    return Quranara.get("/cart");
}
