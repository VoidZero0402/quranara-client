import Quranara from "../clients/Quranara";

import { Response } from "@/types/response.types";
import { Comment } from "@/types/comment.types";

type CommentsQueriesWithIdParams = { commentId: string };

export function getComment(params: CommentsQueriesWithIdParams): Promise<Response<{ comment: Comment }>> {
    const url = `/comments/${params.commentId}`;

    return Quranara.get(url);
}
