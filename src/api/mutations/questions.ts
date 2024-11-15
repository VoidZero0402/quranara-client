import Quranara from "../clients/Quranara";
import { CreateQuestionSchemaType, AnswerQuestionSchemaType } from "@/validators/questions";

type QuestionsMutationsWithIdParams = { questionId: string };

export function createQuestion(data: CreateQuestionSchemaType) {
    return Quranara.post("/questions", {
        body: JSON.stringify(data),
    });
}

export function createQuestionMessage(params: QuestionsMutationsWithIdParams, data: CreateQuestionSchemaType) {
    const url = `/questions/${params.questionId}/message`;

    return Quranara.post(url, {
        body: JSON.stringify(data),
    });
}

export function answerQuestion(params: QuestionsMutationsWithIdParams, data: AnswerQuestionSchemaType) {
    const url = `/questions/${params.questionId}/answer`;

    return Quranara.post(url, {
        body: JSON.stringify(data),
    });
}

export function closeQuestion(params: QuestionsMutationsWithIdParams) {
    const url = `/questions/${params.questionId}/close`;

    return Quranara.patch(url);
}
