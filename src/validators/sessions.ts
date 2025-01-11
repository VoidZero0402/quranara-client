import { z } from "zod";

export const CreateSessionSchema = z.object({
    title: z.string({ required_error: "لطفاً عنوان را وارد کنید." }).min(1, { message: "عنوان نمی‌تواند خالی باشد." }).max(255, { message: "عنوان نباید بیشتر از ۲۵۵ کاراکتر باشد." }),
    course: z.string({ required_error: "لطفاً دوره را وارد کنید." }),
    topic: z.string({ required_error: "لطفاً موضوع را وارد کنید." }),
    isPublic: z.boolean(),
    video: z
        .string({ required_error: "لطفاً ویدیو را وارد کنید." })
        .min(1, { message: "ویدیو نمی‌تواند خالی باشد." })
        .regex(/^[\w-\/\:\.]+\.(mp4)$/, { message: "فرمت ویدیو باید mp4 باشد." })
        .trim(),
    time: z
        .string({ required_error: "لطفاً زمان ویدیو را وارد کنید." })
        .trim()
        .regex(/^(\d{1,2}):([0-5]\d):([0-5]\d)$|^([0-5]?\d):([0-5]\d)$/, { message: "فرمت زمان باید به صورت HH:MM:SS یا MM:SS باشد." }),
    attached: z.string().optional(),
});

export type CreateSessionSchemaType = z.infer<typeof CreateSessionSchema>;

export const UpdateSessionSchema = CreateSessionSchema.omit({ course: true, topic: true });

export type UpdateSessionSchemaType = z.infer<typeof UpdateSessionSchema>;

export const UpdateSessionOrderSchema = z
    .object({
        from: z.number({ required_error: "لطفاً مقدار 'از' را وارد کنید." }).min(1, { message: "مقدار 'از' نمی‌تواند صفر یا منفی باشد." }),
        to: z.number({ required_error: "لطفاً مقدار 'به' را وارد کنید." }).min(1, { message: "مقدار 'به' نمی‌تواند صفر یا منفی باشد." }),
    })
    .refine((values) => values.from !== values.to, {
        path: ["from-to"],
        params: ["from", "to"],
        message: "مقادیر 'از' و 'به' نمی‌توانند یکسان باشند.",
    });

export type UpdateSessionOrderSchemaType = z.infer<typeof UpdateSessionOrderSchema>;
