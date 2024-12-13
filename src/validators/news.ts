import { z } from "zod";
import { TYPE } from "@/constants/news";

export const CreateNewsSchema = z.object({
    type: z.enum([TYPE.COVER, TYPE.CONTENT_BASE], { message: "نوع فقط می‌تواند COVER یا CONTENT_BASE باشد." }),
    cover: z
        .string({ required_error: "وارد کردن کاور الزامی است." })
        .min(1, { message: "کاور نمی‌تواند خالی باشد." })
        .regex(/^[\w-]+\.(jpg|jpeg|png|webp)$/, { message: "فرمت فایل کاور معتبر نیست." })
        .trim(),
    title: z.string().min(1, { message: "عنوان نمی‌تواند خالی باشد." }).max(255, { message: "عنوان باید کمتر از ۲۵۵ کاراکتر باشد." }).optional(),
    description: z.string().min(1, { message: "توضیحات نمی‌تواند خالی باشد." }).max(255, { message: "توضیحات باید کمتر از ۲۵۵ کاراکتر باشد." }).optional(),
    link: z
        .object({
            text: z.string().min(1, { message: "متن لینک نمی‌تواند خالی باشد." }).max(255, { message: "متن لینک باید کمتر از ۲۵۵ کاراکتر باشد." }).optional(),
            url: z.string({ required_error: "وارد کردن آدرس لینک الزامی است." }).url({ message: "آدرس لینک معتبر نیست." }),
        })
        .optional(),
    shown: z.boolean({ required_error: "مشخص کردن وضعیت نمایش الزامی است." }),
});

export type CreateNewsSchemaType = z.infer<typeof CreateNewsSchema>;

export const UpdateNewsSchema = CreateNewsSchema.omit({ type: true, shown: true });

export type UpdateNewsSchemaType = z.infer<typeof UpdateNewsSchema>;
