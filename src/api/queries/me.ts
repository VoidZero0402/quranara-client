import Quranara from "../clients/Quranara";

import { PaginationQuerySchemaType } from "@/validators/pagination";

import { Pagination, Response } from "@/types/response.types";
import { Course } from "@/types/course.types";
import { LimitedBlog } from "@/types/blog.types";
import { LimitedTv } from "@/types/tv.types";

export function getMyCourses(cookie: string): Promise<Response<{ courses: Course[] }>> {
    return Quranara.get("/me/courses", {
        headers: {
            cookie,
        },
    });
}

export function getMyLastCourses(cookie: string): Promise<Response<{ courses: Course[] }>> {
    return Quranara.get("/me/last-courses", {
        headers: {
            cookie,
        },
    });
}

export function getSavedBlog(query: PaginationQuerySchemaType): Promise<Response<{ saves: LimitedBlog[]; pagination: Pagination }>> {
    return Quranara.get("/me/saved-blog", {
        query,
    });
}

export function getSavedTv(query: PaginationQuerySchemaType): Promise<Response<{ saves: LimitedTv[]; pagination: Pagination }>> {
    return Quranara.get("/me/saved-tv", {
        query,
    });
}

export function getLikedBlog(query: PaginationQuerySchemaType): Promise<Response<{ likes: LimitedBlog[]; pagination: Pagination }>> {
    return Quranara.get("/me/liked-blog", {
        query,
    });
}

export function getLikedTv(query: PaginationQuerySchemaType): Promise<Response<{ likes: LimitedTv[]; pagination: Pagination }>> {
    return Quranara.get("/me/liked-tv", {
        query,
    });
}
