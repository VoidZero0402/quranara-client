import Quranara from "../clients/Quranara";
import { CreateCommentSchemaType, ReplyCommentSchemaType, ActionsQuerySchemaType } from "@/validators/comments";
import { convertToQueryString } from "@/libs/funcs";

type CommentMutationsWithIdParams = { commentId: string };

export function createComment(data: CreateCommentSchemaType) {
    return Quranara.post("/comments", {
        body: JSON.stringify(data),
    });
}

export function replyComment(params: CommentMutationsWithIdParams, data: ReplyCommentSchemaType) {
    const url = `/comments/${params.commentId}/reply`;

    return Quranara.post(url, {
        body: JSON.stringify(data),
    });
}

export function answerComment(params: CommentMutationsWithIdParams, data: ReplyCommentSchemaType) {
    const url = `/comments/${params.commentId}/answer`;

    return Quranara.post(url, {
        body: JSON.stringify(data),
    });
}

export function acceptComment(params: CommentMutationsWithIdParams, query: ActionsQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/comments/${params.commentId}/accept?${queryString}`;

    return Quranara.patch(url);
}

export function rejectComment(params: CommentMutationsWithIdParams, query: ActionsQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/comments/${params.commentId}/reject?${queryString}`;

    return Quranara.patch(url);
}

export function pinComment(params: CommentMutationsWithIdParams) {
    const url = `/comments/${params.commentId}/pin`;

    return Quranara.patch(url);
}

export function unpinComment(params: CommentMutationsWithIdParams) {
    const url = `/comments/${params.commentId}/unpin`;

    return Quranara.patch(url);
}
