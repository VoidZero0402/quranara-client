import Quranara from "../clients/Quranara";

type CommentQueriesWithIdParams = { commentId: string };

export function getComment(params: CommentQueriesWithIdParams) {
    const url = `/comments/${params.commentId}`;

    return Quranara.get(url);
}
