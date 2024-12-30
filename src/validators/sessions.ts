import { z } from "zod";

export const CreateSessionSchema = z.object({
    title: z.string({ required_error: "وارد کردن عنوان الزامی است." }).min(1, { message: "عنوان نمی‌تواند خالی باشد." }).max(255, { message: "عنوان باید کمتر از ۲۵۵ کاراکتر باشد." }),
    course: z.string({ required_error: "وارد کردن دوره الزامی است." }),
    topic: z.string({ required_error: "وارد کردن موضوع الزامی است." }),
    isPublic: z.boolean(),
    video: z
        .string({ required_error: "وارد کردن ویدیو الزامی است." })
        .min(1, { message: "ویدیو نمی‌تواند خالی باشد." })
        .regex(/^[\w-\/\:\.]+\.(mp4)$/, { message: "فرمت ویدیو معتبر نیست." })
        .trim(),
    time: z
        .string({ required_error: "وارد کردن زمان ویدیو الزامی است." })
        .trim()
        .regex(/^(\d{1,2}):([0-5]\d):([0-5]\d)$|^([0-5]?\d):([0-5]\d)$/, { message: "فرمت زمان معتبر نیست." }),
    attached: z.string().optional(),
});

export type CreateSessionSchemaType = z.infer<typeof CreateSessionSchema>;

export const UpdateSessionSchema = CreateSessionSchema.omit({ course: true, topic: true });

export type UpdateSessionSchemaType = z.infer<typeof UpdateSessionSchema>;

export const UpdateSessionOrderSchema = z
    .object({
        from: z.number({ required_error: "وارد کردن مقدار from الزامی است." }).min(1, { message: "مقدار from نمی‌تواند صفر یا منفی باشد." }),
        to: z.number({ required_error: "وارد کردن مقدار to الزامی است." }).min(1, { message: "مقدار to نمی‌تواند صفر یا منفی باشد." }),
    })
    .refine((values) => values.from !== values.to, {
        path: ["from-to"],
        params: ["from", "to"],
        message: "مقدار from و to نمی‌توانند یکسان باشند.",
    });

export type UpdateSessionOrderSchemaType = z.infer<typeof UpdateSessionOrderSchema>;
