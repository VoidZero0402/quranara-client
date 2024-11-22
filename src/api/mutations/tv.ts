import Quranara from "../clients/Quranara";

import { CreateTvSchemaType } from "@/validators/tv";

import { MessageResponse } from "@/types/response.types";

type TvsMutationsWithIdParams = { tvId: string };

export function createTv(data: CreateTvSchemaType): MessageResponse {
    return Quranara.post("/tv", {
        body: JSON.stringify(data),
    });
}

export function updateTv(params: TvsMutationsWithIdParams, data: CreateTvSchemaType): MessageResponse {
    const url = `/tv/${params.tvId}`;

    return Quranara.put(url, {
        body: JSON.stringify(data),
    });
}

export function shownTv(params: TvsMutationsWithIdParams): MessageResponse {
    const url = `/tv/${params.tvId}/shown`;

    return Quranara.patch(url);
}

export function unshownTv(params: TvsMutationsWithIdParams): MessageResponse {
    const url = `/tv/${params.tvId}/unshown`;

    return Quranara.patch(url);
}

export function likeTv(params: TvsMutationsWithIdParams): MessageResponse {
    const url = `/tv/${params.tvId}/like`;

    return Quranara.post(url);
}

export function dislikeTv(params: TvsMutationsWithIdParams): MessageResponse {
    const url = `/tv/${params.tvId}/dislike`;

    return Quranara.delete(url);
}

export function saveTv(params: TvsMutationsWithIdParams): MessageResponse {
    const url = `/tv/${params.tvId}/save`;

    return Quranara.post(url);
}

export function unsaveTv(params: TvsMutationsWithIdParams): MessageResponse {
    const url = `/tv/${params.tvId}/unsave`;

    return Quranara.delete(url);
}
