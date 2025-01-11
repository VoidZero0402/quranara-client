import { z } from "zod";
import { ATTACHED_FILE_TYPES } from "@/constants/files";
import { STATUS, TYPE } from "@/constants/tickets";
import { PaginationQuerySchema } from "./pagination";

export const CreateTicketSchema = z.object({
    course: z.string().optional(),
    title: z.string({ required_error: "لطفاً عنوان را وارد کنید." }).min(1, { message: "عنوان نمی‌تواند خالی باشد." }).max(255, { message: "عنوان باید کمتر از ۲۵۵ کاراکتر باشد." }),
    content: z.string({ required_error: "لطفاً محتوا را وارد کنید." }).min(1, { message: "محتوا نمی‌تواند خالی باشد." }).max(2048, { message: "محتوا باید کمتر از ۲۰۴۸ کاراکتر باشد." }),
    type: z
        .enum([TYPE.SUPPORT, TYPE.MANAGEMENT], {
            message: "نوع باید یکی از 'SUPPORT' یا 'MANAGEMENT' باشد.",
        })
        .default(TYPE.SUPPORT),
    attached: z
        .object({
            type: z.enum([ATTACHED_FILE_TYPES.IMAGE, ATTACHED_FILE_TYPES.AUDIO, ATTACHED_FILE_TYPES.ZIP], {
                message: "نوع فایل پیوست باید یکی از 'IMAGE'، 'AUDIO' یا 'ZIP' باشد.",
            }),
            url: z.string({ required_error: "لطفاً آدرس فایل پیوست را وارد کنید." }).url({ message: "آدرس فایل پیوست معتبر نیست." }),
        })
        .optional(),
});

export type CreateTicketSchemaType = z.infer<typeof CreateTicketSchema>;

export const AnswerTicketSchema = CreateTicketSchema.pick({ content: true, attached: true });

export type AnswerTicketSchemaType = z.infer<typeof AnswerTicketSchema>;

export const GetAllTicketsQuerySchema = PaginationQuerySchema.extend({
    status: z.enum([STATUS.ACTIVE, STATUS.SLEEP, STATUS.COLSED], { message: "وضعیت فقط می‌تواند ACTIVE، SLEEP یا CLOSED باشد." }).optional(),
});

export type GetAllTicketsQuerySchemaType = z.infer<typeof GetAllTicketsQuerySchema>;
