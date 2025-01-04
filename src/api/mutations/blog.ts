import Quranara from "../clients/Quranara";

import { CreateBlogSchemaType } from "@/validators/blog";

import { MessageResponse } from "@/types/response.types";

type BlogsMutationsWithIdParams = { blogId: string };

export function createBlog(data: CreateBlogSchemaType): MessageResponse {
    return Quranara.post("/blog", {
        body: JSON.stringify(data),
    });
}

export function updateBlog(params: BlogsMutationsWithIdParams, data: CreateBlogSchemaType): MessageResponse {
    const url = `/blog/${params.blogId}`;

    return Quranara.put(url, {
        body: JSON.stringify(data),
    });
}

export function shownBlog(params: BlogsMutationsWithIdParams): MessageResponse {
    const url = `/blog/${params.blogId}/shown`;

    return Quranara.patch(url);
}

export function unshownBlog(params: BlogsMutationsWithIdParams): MessageResponse {
    const url = `/blog/${params.blogId}/unshown`;

    return Quranara.patch(url);
}

export function likeBlog(params: BlogsMutationsWithIdParams): MessageResponse {
    const url = `/blog/${params.blogId}/like`;

    return Quranara.post(url);
}

export function dislikeBlog(params: BlogsMutationsWithIdParams): MessageResponse {
    const url = `/blog/${params.blogId}/dislike`;

    return Quranara.delete(url);
}

export function saveBlog(params: BlogsMutationsWithIdParams): MessageResponse {
    const url = `/blog/${params.blogId}/save`;

    return Quranara.post(url);
}

export function unsaveBlog(params: BlogsMutationsWithIdParams): MessageResponse {
    const url = `/blog/${params.blogId}/unsave`;

    return Quranara.delete(url);
}
