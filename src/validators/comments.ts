import { z } from "zod";

export const CreateCommentSchema = z
    .object({
        content: z.string({ required_error: "وارد کردن محتوای نظر الزامی است." }).min(1, { message: "محتوای نظر نمی‌تواند خالی باشد." }).max(2048, { message: "محتوای نظر باید کمتر از ۲۰۴۸ کاراکتر باشد." }).trim(),
        blog: z.string().optional(),
        course: z.string().optional(),
        tv: z.string().optional(),
    })
    .refine((values) => values.blog || values.course || values.tv, {
        params: ["blog", "course", "tv"],
        path: ["blog", "course", "tv"],
        message: "باید حداقل یکی از مقادیر بلاگ، دوره یا تلویزیون تعیین شود.",
    });

export type CreateCommentSchemaType = z.infer<typeof CreateCommentSchema>;

export const ReplyCommentSchema = z.object({
    content: z.string({ required_error: "وارد کردن محتوای نظر الزامی است." }).min(1, { message: "محتوای نظر نمی‌تواند خالی باشد." }).max(2048, { message: "محتوای نظر باید کمتر از ۲۰۴۸ کاراکتر باشد." }).trim(),
});

export type ReplyCommentSchemaType = z.infer<typeof ReplyCommentSchema>;

export const ActionsQuerySchema = z.object({
    isReply: z.coerce.number().transform(String).optional(),
});

export type ActionsQuerySchemaType = z.infer<typeof ActionsQuerySchema>;
