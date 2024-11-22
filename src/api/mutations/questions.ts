import Quranara from "../clients/Quranara";

import { CreateQuestionSchemaType, AnswerQuestionSchemaType } from "@/validators/questions";

import { MessageResponse } from "@/types/response.types";

type QuestionsMutationsWithIdParams = { questionId: string };

export function createQuestion(data: CreateQuestionSchemaType): MessageResponse {
    return Quranara.post("/questions", {
        body: JSON.stringify(data),
    });
}

export function createQuestionMessage(params: QuestionsMutationsWithIdParams, data: CreateQuestionSchemaType): MessageResponse {
    const url = `/questions/${params.questionId}/message`;

    return Quranara.post(url, {
        body: JSON.stringify(data),
    });
}

export function answerQuestion(params: QuestionsMutationsWithIdParams, data: AnswerQuestionSchemaType): MessageResponse {
    const url = `/questions/${params.questionId}/answer`;

    return Quranara.post(url, {
        body: JSON.stringify(data),
    });
}

export function closeQuestion(params: QuestionsMutationsWithIdParams): MessageResponse {
    const url = `/questions/${params.questionId}/close`;

    return Quranara.patch(url);
}
