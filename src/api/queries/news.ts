import Quranara from "../clients/Quranara";

import { Response } from "@/types/response.types";
import { News } from "@/types/news.types";

export function getAllNews(): Promise<Response<{ news: News[] }>> {
    return Quranara.get("/news");
}
