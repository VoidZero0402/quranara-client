import Quranara from "../clients/Quranara";
import { SearchTvsQuerySchameType } from "@/validators/tv";
import { PaginationQuerySchemaType } from "@/validators/pagination";
import { convertToQueryString } from "@/libs/funcs";

type TvsQueriesWithSlugParams = { slug: string };

export function getAllTvs(query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/tv?${queryString}`;

    return Quranara.get(url);
}

export function searchInTvs(query: SearchTvsQuerySchameType) {
    const queryString = convertToQueryString(query);
    const url = `/tv/search?${queryString}`;

    return Quranara.get(url);
}

export function getTv(params: TvsQueriesWithSlugParams) {
    const url = `/tv/${params.slug}`;

    return Quranara.get(url);
}

export function getRelatedTvs(params: TvsQueriesWithSlugParams) {
    const url = `/tv/${params.slug}/related`;

    return Quranara.get(url);
}

export function getTvComments(params: TvsQueriesWithSlugParams, query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/tv/${params.slug}/comments?${queryString}`;

    return Quranara.get(url);
}
