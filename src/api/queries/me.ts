import Quranara from "../clients/Quranara";

import { PaginationQuerySchemaType } from "@/validators/pagination";

import { convertToQueryString } from "@/libs/funcs";

import { Pagination, Response } from "@/types/response.types";
import { Course } from "@/types/course.types";
import { LimitedBlog } from "@/types/blog.types";
import { LimitedTv } from "@/types/tv.types";

export function getMyCourses(): Promise<Response<{ courses: Course[] }>> {
    return Quranara.get("/me/courses");
}

export function getSavedBlog(query: PaginationQuerySchemaType): Promise<Response<{ saves: LimitedBlog[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/me/saved-blog?${queryString}`;

    return Quranara.get(url);
}

export function getSavedTv(query: PaginationQuerySchemaType): Promise<Response<{ saves: LimitedTv[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/me/saved-tv?${queryString}`;

    return Quranara.get(url);
}

export function getMyLikedBlog(query: PaginationQuerySchemaType): Promise<Response<{ likes: LimitedBlog[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/me/liked-blog?${queryString}`;

    return Quranara.get(url);
}

export function getMyLikedTv(query: PaginationQuerySchemaType): Promise<Response<{ likes: LimitedTv[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/me/liked-tv?${queryString}`;

    return Quranara.get(url);
}
