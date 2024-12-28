import Quranara from "../clients/Quranara";

import { PaginationQuerySchemaType } from "@/validators/pagination";

import { Pagination, Response } from "@/types/response.types";
import { Poll } from "@/types/poll.types";

type PollsQueriesWithIdParams = { pollId: string };

export function getAllPolls(query: PaginationQuerySchemaType): Promise<Response<{ polls: Poll[]; pagination: Pagination }>> {
    return Quranara.get("/polls", {
        query,
    });
}

export function getPoll(params: PollsQueriesWithIdParams): Promise<Response<{ poll: Poll }>> {
    const url = `/polls/${params.pollId}`;

    return Quranara.get(url);
}
