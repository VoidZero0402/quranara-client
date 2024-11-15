import Quranara from "../clients/Quranara";
import { PaginationQuerySchemaType } from "@/validators/pagination";
import { convertToQueryString } from "@/libs/funcs";

type PollsQueriesWithIdParams = { pollId: string };

export function getAllPolls(query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/polls?${queryString}`;

    return Quranara.get(url);
}

export function getPoll(params: PollsQueriesWithIdParams) {
    const url = `/polls/${params.pollId}`;

    return Quranara.get(url);
}
