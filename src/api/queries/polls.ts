import Quranara from "../clients/Quranara";

import { PaginationQuerySchemaType } from "@/validators/pagination";

import { convertToQueryString } from "@/libs/funcs";

import { Pagination, Response } from "@/types/response.types";
import { Poll } from "@/types/poll.types";

type PollsQueriesWithIdParams = { pollId: string };

export function getAllPolls(query: PaginationQuerySchemaType): Promise<Response<{ polls: Poll[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/polls?${queryString}`;

    return Quranara.get(url);
}

export function getPoll(params: PollsQueriesWithIdParams): Promise<Response<{ poll: Poll }>> {
    const url = `/polls/${params.pollId}`;

    return Quranara.get(url);
}
