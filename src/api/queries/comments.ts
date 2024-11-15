import Quranara from "../clients/Quranara";

type CommentsQueriesWithIdParams = { commentId: string };

export function getComment(params: CommentsQueriesWithIdParams) {
    const url = `/comments/${params.commentId}`;

    return Quranara.get(url);
}
