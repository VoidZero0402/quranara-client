import Quranara from "../clients/Quranara";

import { CreateCommentSchemaType, ReplyCommentSchemaType, ActionsQuerySchemaType } from "@/validators/comments";

import { convertToQueryString } from "@/libs/funcs";

import { MessageResponse } from "@/types/response.types";

type CommentsQueriesWithIdParams = { commentId: string };

export function createComment(data: CreateCommentSchemaType): MessageResponse {
    return Quranara.post("/comments", {
        body: JSON.stringify(data),
    });
}

export function replyComment(params: CommentsQueriesWithIdParams, data: ReplyCommentSchemaType): MessageResponse {
    const url = `/comments/${params.commentId}/reply`;

    return Quranara.post(url, {
        body: JSON.stringify(data),
    });
}

export function answerComment(params: CommentsQueriesWithIdParams, data: ReplyCommentSchemaType): MessageResponse {
    const url = `/comments/${params.commentId}/answer`;

    return Quranara.post(url, {
        body: JSON.stringify(data),
    });
}

export function acceptComment(params: CommentsQueriesWithIdParams, query: ActionsQuerySchemaType): MessageResponse {
    const queryString = convertToQueryString(query);
    const url = `/comments/${params.commentId}/accept?${queryString}`;

    return Quranara.patch(url);
}

export function rejectComment(params: CommentsQueriesWithIdParams, query: ActionsQuerySchemaType): MessageResponse {
    const queryString = convertToQueryString(query);
    const url = `/comments/${params.commentId}/reject?${queryString}`;

    return Quranara.patch(url);
}

export function pinComment(params: CommentsQueriesWithIdParams): MessageResponse {
    const url = `/comments/${params.commentId}/pin`;

    return Quranara.patch(url);
}

export function unpinComment(params: CommentsQueriesWithIdParams): MessageResponse {
    const url = `/comments/${params.commentId}/unpin`;

    return Quranara.patch(url);
}

export function checkReplies(params: CommentsQueriesWithIdParams): MessageResponse {
    const url = `/comments/${params.commentId}/check-replies`;

    return Quranara.patch(url);
}
