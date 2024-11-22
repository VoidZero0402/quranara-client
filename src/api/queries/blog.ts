import Quranara from "../clients/Quranara";

import { blog } from "../cache/tags";

import { GetAllBlogsQuerySchemaType, SearchBlogsQuerySchameType } from "@/validators/blog";
import { PaginationQuerySchemaType } from "@/validators/pagination";

import { convertToQueryString } from "@/libs/funcs";

import { Response, Pagination } from "@/types/response.types";
import { Blog, LimitedBlog } from "@/types/blog.types";
import { Comment } from "@/types/comment.types";

type BlogsQueriesWithSlugParams = { slug: string };

export function getAllBlogs(): Promise<Response<{ blogs: LimitedBlog[]; pagination: Pagination }>> {
    return Quranara.get("/blog", {
        cache: "force-cache",
        next: {
            tags: [blog.default],
        },
    });
}

export function getBlogs(query: GetAllBlogsQuerySchemaType): Promise<Response<{ blogs: LimitedBlog[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/blog?${queryString}`;

    return Quranara.get(url);
}

export function searchInBlogs(query: SearchBlogsQuerySchameType): Promise<Response<{ blogs: LimitedBlog[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/blog/search?${queryString}`;

    return Quranara.get(url);
}

export function getBlog(params: BlogsQueriesWithSlugParams): Promise<Response<{ blog: Blog }>> {
    const url = `/blog/${params.slug}`;

    return Quranara.get(url, {
        cache: "force-cache",
        next: {
            tags: [blog.getOne(params.slug)],
        },
    });
}

export function getRelatedBlogs(params: BlogsQueriesWithSlugParams): Promise<Response<{ blogs: LimitedBlog[] }>> {
    const url = `/blog/${params.slug}/related`;

    return Quranara.get(url, {
        cache: "force-cache",
        next: {
            tags: [blog.getOne(params.slug)],
        },
    });
}

export function getBlogComments(params: BlogsQueriesWithSlugParams, query: PaginationQuerySchemaType): Promise<Response<{ comments: Comment[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);;
    const url = `/blog/${params.slug}/comments?${queryString}`;

    return Quranara.get(url, {
        cache: "force-cache",
        next: {
            tags: [blog.getComments(params.slug)],
        },
    });
}

export function getDraftedBlogs(query: PaginationQuerySchemaType): Promise<Response<{ blogs: LimitedBlog[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/blog/drafted?${queryString}`;

    return Quranara.get(url);
}
