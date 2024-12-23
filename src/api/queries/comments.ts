import Quranara from "../clients/Quranara";

import { GetAllCommentsQuerySchemaType } from "@/validators/comments";

import { convertToQueryString } from "@/libs/funcs";

import { Pagination, Response } from "@/types/response.types";
import { Comment } from "@/types/comment.types";

type CommentsQueriesWithIdParams = { commentId: string };

export function getAllComments(query: GetAllCommentsQuerySchemaType): Promise<Response<{ comments: Comment[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/comments/all?${queryString}`;

    return Quranara.get(url);
}

export function getComment(params: CommentsQueriesWithIdParams): Promise<Response<{ comment: Comment }>> {
    const url = `/comments/${params.commentId}`;

    return Quranara.get(url);
}
