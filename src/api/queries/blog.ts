import Quranara from "../clients/Quranara";

import { blog } from "../cache/tags";

import { GetAllBlogsQuerySchemaType, SearchBlogsQuerySchameType } from "@/validators/blog";
import { PaginationQuerySchemaType } from "@/validators/pagination";

import { Response, Pagination } from "@/types/response.types";
import { Blog, LimitedBlog } from "@/types/blog.types";
import { Comment } from "@/types/comment.types";

type BlogsQueriesWithSlugParams = { slug: string };
type BlogsQueriesWithIdParams = { blogId: string };

export function getLastBlogs(): Promise<Response<{ blogs: LimitedBlog[]; pagination: Pagination }>> {
    return Quranara.get("/blog", {
        query: { page: 1, limit: 8 },
        cache: "force-cache",
        next: {
            tags: [blog.default],
        },
    });
}

export function getBlogs(query: GetAllBlogsQuerySchemaType): Promise<Response<{ blogs: LimitedBlog[]; pagination: Pagination }>> {
    return Quranara.get("/blog", {
        query,
    });
}

export function getAllBlogs(query: GetAllBlogsQuerySchemaType): Promise<Response<{ blogs: LimitedBlog[]; pagination: Pagination }>> {
    return Quranara.get("/blog/all", {
        query,
    });
}

export function searchInBlogs(query: SearchBlogsQuerySchameType): Promise<Response<{ blogs: LimitedBlog[]; pagination: Pagination }>> {
    return Quranara.get("/blog/search", {
        query,
    });
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

export function getRawBlog(params: BlogsQueriesWithIdParams): Promise<Response<{ blog: Blog }>> {
    const url = `/blog/${params.blogId}/raw`;

    return Quranara.get(url);
}

export function getDetails(params: BlogsQueriesWithIdParams): Promise<Response<{ isLiked: boolean; isSaved: boolean; disabled: boolean }>> {
    const url = `/blog/${params.blogId}/details`;

    return Quranara.get(url);
}

export function getRelatedBlogs(params: BlogsQueriesWithSlugParams): Promise<Response<{ blogs: LimitedBlog[] }>> {
    const url = `/blog/${params.slug}/related`;

    return Quranara.get(url, {
        cache: "force-cache",
        next: {
            tags: [blog.getRelated(params.slug)],
        },
    });
}

export function getBlogComments(params: BlogsQueriesWithSlugParams, query: PaginationQuerySchemaType): Promise<Response<{ comments: Comment[]; pagination: Pagination }>> {
    const url = `/blog/${params.slug}/comments`;

    return Quranara.get(url, {
        query,
    });
}
