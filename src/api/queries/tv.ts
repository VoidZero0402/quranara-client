import Quranara from "../clients/Quranara";

import { tv } from "../cache/tags";

import { GetAllTvsQuerySchemaType, SearchTvsQuerySchameType } from "@/validators/tv";
import { PaginationQuerySchemaType } from "@/validators/pagination";

import { convertToQueryString } from "@/libs/funcs";

import { Response, Pagination } from "@/types/response.types";
import { Tv, LimitedTv } from "@/types/tv.types";
import { Comment } from "@/types/comment.types";

type TvsQueriesWithSlugParams = { slug: string };
type TvsQueriesWithIdParams = { tvId: string };

export function getAllTvs(query: PaginationQuerySchemaType): Promise<Response<{ tvs: LimitedTv[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/tv?${queryString}`;

    return Quranara.get(url, {
        cache: "force-cache",
        next: {
            tags: [tv.default],
        },
    });
}

export function getTvs(query: GetAllTvsQuerySchemaType): Promise<Response<{ tvs: LimitedTv[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/tv?${queryString}`;

    return Quranara.get(url);
}

export function searchInTvs(query: SearchTvsQuerySchameType): Promise<Response<{ tvs: LimitedTv[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/tv/search?${queryString}`;

    return Quranara.get(url);
}

export function getTv(params: TvsQueriesWithSlugParams): Promise<Response<{ tv: Tv }>> {
    const url = `/tv/${params.slug}`;

    return Quranara.get(url, {
        cache: "force-cache",
        next: {
            tags: [tv.getOne(params.slug)],
        },
    });
}

export function getDetails(params: TvsQueriesWithIdParams): Promise<Response<{ isLiked: boolean; isSaved: boolean; disabled: boolean }>> {
    const url = `/tv/${params.tvId}/details`;

    return Quranara.get(url);
}

export function getRelatedTvs(params: TvsQueriesWithSlugParams): Promise<Response<{ tvs: LimitedTv[] }>> {
    const url = `/tv/${params.slug}/related`;

    return Quranara.get(url, {
        cache: "force-cache",
        next: {
            tags: [tv.getOne(params.slug)],
        },
    });
}

export function getTvComments(params: TvsQueriesWithSlugParams, query: PaginationQuerySchemaType): Promise<Response<{ comments: Comment[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/tv/${params.slug}/comments?${queryString}`;

    return Quranara.get(url, {
        cache: "force-cache",
        next: {
            tags: [tv.getComments(params.slug)],
        },
    });
}
