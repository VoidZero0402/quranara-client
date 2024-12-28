import Quranara from "../clients/Quranara";

import { GetAllCommentsQuerySchemaType } from "@/validators/comments";

import { Pagination, Response } from "@/types/response.types";
import { Comment } from "@/types/comment.types";

type CommentsQueriesWithIdParams = { commentId: string };

export function getAllComments(query: GetAllCommentsQuerySchemaType): Promise<Response<{ comments: Comment[]; pagination: Pagination }>> {
    return Quranara.get("/comments/all", {
        query
    });
}

export function getComment(params: CommentsQueriesWithIdParams): Promise<Response<{ comment: Comment }>> {
    const url = `/comments/${params.commentId}`;

    return Quranara.get(url);
}
