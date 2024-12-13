import Quranara from "../clients/Quranara";

import { PaginationQuerySchemaType } from "@/validators/pagination";

import { convertToQueryString } from "@/libs/funcs";

import { Pagination, Response } from "@/types/response.types";
import { Question, LimitedQuestion } from "@/types/question.types";

type QuestionsQueriesWithIdParams = { questionId: string };

export function getQuestions(query: PaginationQuerySchemaType, cookie?: string): Promise<Response<{ questions: Question[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/questions?${queryString}`;

    return Quranara.get(url, {
        headers: {
            ...(cookie && { cookie }),
        },
    });
}

export function getQuestion(params: QuestionsQueriesWithIdParams): Promise<Response<{ question: Question }>> {
    const url = `/questions/${params.questionId}`;

    return Quranara.get(url);
}

export function getAllQuestions(query: PaginationQuerySchemaType): Promise<Response<{ questions: LimitedQuestion[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/questions/all?${queryString}`;

    return Quranara.get(url);
}
