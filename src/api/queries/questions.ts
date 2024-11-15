import Quranara from "../clients/Quranara";
import { PaginationQuerySchemaType } from "@/validators/pagination";
import { convertToQueryString } from "@/libs/funcs";

type QuestionsQueriesWithIdParams = { questionId: string };

export function getQuestions(query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/questions?${queryString}`;

    return Quranara.get(url);
}

export function getQuestion(params: QuestionsQueriesWithIdParams) {
    const url = `/questions/${params.questionId}`;

    return Quranara.get(url);
}

export function getAllQuestions(query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/questions/all?${queryString}`;

    return Quranara.get(url);
}
