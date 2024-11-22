import Quranara from "../clients/Quranara";

import { CreateNewsSchemaType, UpdateNewsSchemaType } from "@/validators/news";

import { MessageResponse } from "@/types/response.types";

type NewsMutationsWithIdParams = { newsId: string };

export function createNews(data: CreateNewsSchemaType): MessageResponse {
    return Quranara.post("/news", {
        body: JSON.stringify(data),
    });
}

export function updateNews(params: NewsMutationsWithIdParams, data: UpdateNewsSchemaType): MessageResponse {
    const url = `/news/${params.newsId}`;

    return Quranara.put(url, {
        body: JSON.stringify(data),
    });
}

export function removeNews(params: NewsMutationsWithIdParams): MessageResponse {
    const url = `/news/${params.newsId}`;

    return Quranara.delete(url);
}

export function shownNews(params: NewsMutationsWithIdParams): MessageResponse {
    const url = `/news/${params.newsId}/shown`;

    return Quranara.patch(url);
}

export function unshownNews(params: NewsMutationsWithIdParams): MessageResponse {
    const url = `/news/${params.newsId}/unshown`;

    return Quranara.patch(url);
}
