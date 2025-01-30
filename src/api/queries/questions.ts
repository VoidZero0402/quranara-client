import Quranara from "../clients/Quranara";

import { GetAllQuestionsQuerySchemaType } from "@/validators/questions";
import { PaginationQuerySchemaType } from "@/validators/pagination";

import { Pagination, Response } from "@/types/response.types";
import { Question } from "@/types/question.types";

type QuestionsQueriesWithIdParams = { questionId: string };

export function getQuestions(query: PaginationQuerySchemaType, cookie?: string): Promise<Response<{ questions: Question[]; pagination: Pagination }>> {
    return Quranara.get("/questions", {
        query,
        headers: {
            ...(cookie !== undefined && { cookie }),
        },
    });
}

export function getQuestion(params: QuestionsQueriesWithIdParams): Promise<Response<{ question: Question }>> {
    const url = `/questions/${params.questionId}`;

    return Quranara.get(url);
}

export function getAllQuestions(query: GetAllQuestionsQuerySchemaType): Promise<Response<{ questions: Question[]; pagination: Pagination }>> {
    return Quranara.get("/questions/all", {
        query,
    });
}
