import { z } from "zod";
import { SORTING } from "@/constants/tv";
import { PaginationQuerySchema } from "./pagination";

export const CreateTvSchema = z.object({
    title: z.string({ required_error: "عنوان الزامی است" }).min(1, { message: "عنوان نباید خالی باشد" }).max(255, { message: "عنوان باید کمتر از 255 کاراکتر باشد" }).trim(),
    description: z.string({ required_error: "توضیحات الزامی است" }).min(1, { message: "توضیحات نباید خالی باشد" }).max(1024, { message: "توضیحات باید کمتر از 1024 کاراکتر باشد" }).trim(),
    slug: z.string().min(1, { message: "آدرس (slug) نباید خالی باشد" }).max(255, { message: "آدرس (slug) باید کمتر از 255 کاراکتر باشد" }).trim().optional(),
    category: z.string({ required_error: "دسته‌بندی الزامی است" }),
    cover: z
        .string({ required_error: "تصویر پوشش الزامی است" })
        .min(1, { message: "تصویر پوشش نباید خالی باشد" })
        .regex(/^[\w-]+\.(jpg|jpeg|png|webp)$/, { message: "تصویر پوشش فرمت نامعتبر است" })
        .trim(),
    video: z
        .string({ required_error: "ویدیو الزامی است" })
        .min(1, { message: "ویدیو نباید خالی باشد" })
        .regex(/^[\w-]+\.(mp4)$/, { message: "فرمت ویدیو نامعتبر است" })
        .trim(),
    attached: z.string().min(1, { message: "فایل پیوست نباید خالی باشد" }).trim().optional(),
    content: z.string().min(1, { message: "محتوا نباید خالی باشد" }).trim().optional(),
});

export type CreateTvSchemaType = z.infer<typeof CreateTvSchema> & { slug: string };

export const GetAllTvsQuerySchema = PaginationQuerySchema.extend({
    category: z
        .string({ required_error: "دسته‌بندی الزامی است" })
        .or(z.array(z.string({ required_error: "دسته‌بندی الزامی است" })))
        .optional(),
    sort: z.enum([SORTING.NEWEST, SORTING.OLDEST, SORTING.POPULAR], { message: "مقدار مرتب‌سازی نامعتبر است." }).default(SORTING.NEWEST),
    search: z.string().min(1, { message: "جستجو نباید خالی باشد" }).optional(),
});

export type GetAllTvsQuerySchemaType = z.infer<typeof GetAllTvsQuerySchema>;

export const SearchTvsQuerySchame = PaginationQuerySchema.extend({
    q: z.string({ message: "پرسش الزامی است" }).min(1, { message: "عنوان نباید خالی باشد" }).trim(),
});

export type SearchTvsQuerySchameType = z.infer<typeof SearchTvsQuerySchame>;
