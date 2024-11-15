import Quranara from "../clients/Quranara";

export function getAllNews() {
    return Quranara.get("/news");
}
