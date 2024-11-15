import Quranara from "../clients/Quranara";
import { CreateNewsSchemaType, UpdateNewsSchemaType } from "@/validators/news";

type NewsMutationsWithIdParams = { newsId: string };

export function createNews(data: CreateNewsSchemaType) {
    return Quranara.post("/news", {
        body: JSON.stringify(data),
    });
}

export function updateNews(params: NewsMutationsWithIdParams, data: UpdateNewsSchemaType) {
    const url = `/news/${params.newsId}`;

    return Quranara.put(url, {
        body: JSON.stringify(data),
    });
}

export function removeNews(params: NewsMutationsWithIdParams) {
    const url = `/news/${params.newsId}`;

    return Quranara.delete(url);
}

export function shownNews(params: NewsMutationsWithIdParams) {
    const url = `/news/${params.newsId}/shown`;

    return Quranara.patch(url);
}

export function unshownNews(params: NewsMutationsWithIdParams) {
    const url = `/news/${params.newsId}/unshown`;

    return Quranara.patch(url);
}
