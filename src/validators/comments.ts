import { z } from "zod";
import { PaginationQuerySchema } from "./pagination";
import { SOURCE, STATUS } from "@/constants/comments";

export const GetAllCommentsQuerySchema = PaginationQuerySchema.extend({
    source: z.enum([SOURCE.COURSE, SOURCE.BLOG, SOURCE.TV], { message: "منبع باید یکی از گزینه‌های COURSE، BLOG یا TV باشد." }),
    status: z.enum([STATUS.ACCEPTED, STATUS.PENDING, STATUS.REJECTED], { message: "وضعیت باید یکی از گزینه‌های ACCEPTED، PENDING یا REJECTED باشد." }).optional(),
});

export type GetAllCommentsQuerySchemaType = z.infer<typeof GetAllCommentsQuerySchema>;

export const CreateCommentSchema = z
    .object({
        content: z.string({ required_error: "لطفاً محتوای نظر را وارد کنید." }).min(1, { message: "محتوای نظر نمی‌تواند خالی باشد." }).max(2048, { message: "محتوای نظر نمی‌تواند بیشتر از ۲۰۴۸ کاراکتر باشد." }),
        blog: z.string().optional(),
        course: z.string().optional(),
        tv: z.string().optional(),
    })
    .refine((values) => values.blog || values.course || values.tv, {
        params: ["blog", "course", "tv"],
        path: ["blog", "course", "tv"],
        message: "لطفاً حداقل یکی از مقادیر بلاگ، دوره یا تلویزیون را مشخص کنید.",
    });

export type CreateCommentSchemaType = z.infer<typeof CreateCommentSchema>;

export const ReplyCommentSchema = z.object({
    content: z.string({ required_error: "لطفاً محتوای نظر را وارد کنید." }).min(1, { message: "محتوای نظر نمی‌تواند خالی باشد." }).max(2048, { message: "محتوای نظر نمی‌تواند بیشتر از ۲۰۴۸ کاراکتر باشد." }),
});
export type ReplyCommentSchemaType = z.infer<typeof ReplyCommentSchema>;

export const ActionsQuerySchema = z.object({
    isReply: z.coerce.number().transform(String).optional(),
});

export type ActionsQuerySchemaType = z.infer<typeof ActionsQuerySchema>;
