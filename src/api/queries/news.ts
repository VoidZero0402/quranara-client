import Quranara from "../clients/Quranara";

import { news } from "../cache/tags";

import { Response } from "@/types/response.types";
import { News } from "@/types/news.types";

export function getAllNews(): Promise<Response<{ news: News[] }>> {
    return Quranara.get("/news", {
        cache: "force-cache",
        next: {
            tags: [news.default],
        },
    });
}
