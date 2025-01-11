import { z } from "zod";
import { ATTACHED_FILE_TYPES } from "@/constants/files";
import { STATUS } from "@/constants/questions";
import { PaginationQuerySchema } from "./pagination";

export const CreateQuestionSchema = z.object({
    session: z.string({ required_error: "لطفاً جلسه را وارد کنید." }),
    content: z.string({ required_error: "لطفاً متن سوال را وارد کنید." }).min(1, { message: "متن سوال نمی‌تواند خالی باشد." }).max(2048, { message: "متن سوال نباید بیشتر از ۲۰۴۸ کاراکتر باشد." }),
    attached: z
        .object({
            type: z.enum([ATTACHED_FILE_TYPES.IMAGE, ATTACHED_FILE_TYPES.AUDIO, ATTACHED_FILE_TYPES.ZIP], { message: "نوع فایل پیوست باید یکی از موارد IMAGE، AUDIO یا ZIP باشد." }),
            url: z.string({ required_error: "لطفاً آدرس فایل پیوست را وارد کنید." }).url({ message: "آدرس وارد شده برای فایل پیوست معتبر نیست." }),
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
