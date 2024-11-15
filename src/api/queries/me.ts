import Quranara from "../clients/Quranara";
import { PaginationQuerySchemaType } from "@/validators/pagination";
import { convertToQueryString } from "@/libs/funcs";

export function getMyCourses() {
    return Quranara.get("/me/courses");
}

export function getSavedBlog(query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/me/saved-blog?${queryString}`;

    return Quranara.get(url);
}

export function getSavedTv(query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/me/saved-tv?${queryString}`;

    return Quranara.get(url);
}

export function getMyLikedBlog(query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/me/liked-blog?${queryString}`;

    return Quranara.get(url);
}

export function getMyLikedTv(query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/me/liked-tv?${queryString}`;

    return Quranara.get(url);
}
