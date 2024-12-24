import { z } from "zod";
import { ATTACHED_FILE_TYPES } from "@/constants/files";
import { STATUS } from "@/constants/questions";
import { PaginationQuerySchema } from "./pagination";

export const CreateQuestionSchema = z.object({
    session: z.string({ required_error: "وارد کردن جلسه الزامی است." }),
    content: z.string({ required_error: "وارد کردن متن سوال الزامی است." }).min(1, { message: "متن سوال نمی‌تواند خالی باشد." }).max(2048, { message: "متن سوال باید کمتر از ۲۰۴۸ کاراکتر باشد." }),
    attached: z
        .object({
            type: z.enum([ATTACHED_FILE_TYPES.IMAGE, ATTACHED_FILE_TYPES.AUDIO, ATTACHED_FILE_TYPES.ZIP], { message: "نوع فایل پیوست فقط می‌تواند IMAGE، AUDIO یا ZIP باشد." }),
            url: z.string({ required_error: "وارد کردن آدرس فایل پیوست الزامی است." }).url({ message: "آدرس فایل پیوست معتبر نیست." }),
        })
        .optional(),
});

export type CreateQuestionSchemaType = z.infer<typeof CreateQuestionSchema>;

export const AnswerQuestionSchema = CreateQuestionSchema.omit({ session: true });

export type AnswerQuestionSchemaType = z.infer<typeof AnswerQuestionSchema>;

export const GetAllQuestionsQuerySchema = PaginationQuerySchema.extend({
    status: z.enum([STATUS.ACTIVE, STATUS.SLEEP, STATUS.COLSED], { message: "وضعیت فقط می‌تواند ACTIVE، SLEEP یا CLOSED باشد." }).optional(),
});

export type GetAllQuestionsQuerySchemaType = z.infer<typeof GetAllQuestionsQuerySchema>;
