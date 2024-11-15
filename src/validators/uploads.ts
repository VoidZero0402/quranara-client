import { z } from "zod";

const types = ["image/jpeg", "image/png", "image/webp", "audio/mpeg", "audio/wav", "application/pdf", "application/x-compressed", "application/x-zip-compressed"] as const;

export const GetPreSignedUrlQuerySchema = z.object({
    filename: z.string({ required_error: "نام فایل الزامی است" }).min(1, { message: "نام فایل نباید خالی باشد" }),
    type: z.enum(types, { message: "نوع فایل معتبر نیست" }),
});

export type GetPreSignedUrlQuerySchemaType = z.infer<typeof GetPreSignedUrlQuerySchema>;
