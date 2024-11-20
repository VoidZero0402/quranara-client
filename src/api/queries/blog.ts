import Quranara from "../clients/Quranara";

import { GET_ALL_BLOGS } from "@/constants/requestTags";

import { GetAllBlogsQuerySchemaType, SearchBlogsQuerySchameType } from "@/validators/blog";
import { PaginationQuerySchemaType } from "@/validators/pagination";

import { convertToQueryString } from "@/libs/funcs";

import { Response } from "@/types/response.types";
import { LimitedBlog } from "@/types/blog.types";

type BlogsQueriesWithSlugParams = { slug: string };

export function getAllBlogs(query: Partial<GetAllBlogsQuerySchemaType> = {}): Promise<Response<{ blogs: LimitedBlog[] }>> {
    const queryString = convertToQueryString(query);
    const url = `/blog?${queryString}`;

    return Quranara.get(url, {
        cache: "force-cache",
        next: {
            tags: GET_ALL_BLOGS
        }
    });
}

export function searchInBlogs(query: SearchBlogsQuerySchameType) {
    const queryString = convertToQueryString(query);
    const url = `/blog/search?${queryString}`;

    return Quranara.get(url);
}

export function getBlog(params: BlogsQueriesWithSlugParams) {
    const url = `/blog/${params.slug}`;

    return Quranara.get(url);
}

export function getRelatedBlogs(params: BlogsQueriesWithSlugParams) {
    const url = `/blog/${params.slug}/related`;

    return Quranara.get(url);
}

export function getBlogComments(params: BlogsQueriesWithSlugParams) {
    const url = `/blog/${params.slug}/comments`;

    return Quranara.get(url);
}

export function getDraftedBlogs(query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/blog/drafted?${queryString}`;

    return Quranara.get(url);
}
