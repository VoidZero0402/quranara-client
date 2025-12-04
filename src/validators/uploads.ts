import { z } from "zod";

const types = ["image/jpeg", "image/png", "image/webp", "audio/mpeg", "audio/wav", "application/pdf", "application/zip", "application/x-compressed", "application/x-zip-compressed", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"] as const;

export const GetPreSignedUrlQuerySchema = z.object({
    filename: z.string({ required_error: "لطفاً نام فایل را وارد کنید." }).min(1, { message: "نام فایل نمی‌تواند خالی باشد." }),
    type: z.enum(types, { message: "نوع فایل وارد شده معتبر نمی‌باشد." }),
});

export type GetPreSignedUrlQuerySchemaType = z.infer<typeof GetPreSignedUrlQuerySchema>;
