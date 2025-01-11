import { z } from "zod";

export const CreateNewsSchema = z.object({
    cover: z
        .string({ required_error: "وارد کردن کاور الزامی است." })
        .min(1, { message: "کاور نمی‌تواند خالی باشد." })
        .regex(/^[\w\-\/:.]+\.(jpg|jpeg|png|webp)$/, { message: "فرمت فایل کاور معتبر نیست." })
        .trim(),
    title: z.string().min(1, { message: "عنوان نمی‌تواند خالی باشد." }).max(255, { message: "عنوان باید کمتر از ۲۵۵ کاراکتر باشد." }),
    description: z.string().min(1, { message: "توضیحات نمی‌تواند خالی باشد." }).max(2048, { message: "توضیحات باید کمتر از ۲۰۴۸ کاراکتر باشد." }),
    link: z
        .object({
            text: z.string().max(255, { message: "متن لینک باید کمتر از ۲۵۵ کاراکتر باشد." }).optional(),
            url: z
                .string({ required_error: "وارد کردن آدرس لینک الزامی است." })
                .regex(/^https?:\/\/[^\s$.?#].[^\s]*$/, { message: "آدرس لینک معتبر نیست." })
                .optional(),
        })
        .refine((link) => !!link.text === !!link.url, {
            path: ["text"],
            message: "در صورتی که آدرس لینک وارد شود، متن لینک هم باید وارد شود و بالعکس.",
        })
        .optional(),
    shown: z.boolean({ required_error: "مشخص کردن وضعیت نمایش الزامی است." }),
});

export type CreateNewsSchemaType = z.infer<typeof CreateNewsSchema>;

export const UpdateNewsSchema = CreateNewsSchema.omit({ shown: true });

export type UpdateNewsSchemaType = z.infer<typeof UpdateNewsSchema>;
