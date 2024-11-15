import { z } from "zod";

export const CreateTopicSchema = z.object({
    title: z.string({ required_error: "وارد کردن عنوان الزامی است." }).min(1, { message: "عنوان نمی‌تواند خالی باشد." }).max(255, { message: "عنوان باید کمتر از ۲۵۵ کاراکتر باشد." }).trim(),
    course: z.string({ required_error: "وارد کردن دوره الزامی است." }),
});

export type CreateTopicSchemaType = z.infer<typeof CreateTopicSchema>;

export const UpdateTopicSchema = CreateTopicSchema.pick({ title: true });

export type UpdateTopicSchemaType = z.infer<typeof UpdateTopicSchema>;

export const UpdateTopicOrderSchema = z
    .object({
        from: z.number({ required_error: "وارد کردن مقدار از الزامی است." }).min(1, { message: "مقدار از نمی‌تواند صفر یا منفی باشد." }),
        to: z.number({ required_error: "وارد کردن مقدار به الزامی است." }).min(1, { message: "مقدار به نمی‌تواند صفر یا منفی باشد." }),
    })
    .refine((values) => values.from !== values.to, {
        path: ["from-to"],
        params: ["from", "to"],
        message: "مقدار از و به نمی‌توانند یکسان باشند.",
    });

export type UpdateTopicOrderSchemaType = z.infer<typeof UpdateTopicOrderSchema>;
