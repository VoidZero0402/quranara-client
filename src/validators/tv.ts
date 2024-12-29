import { z } from "zod";
import { SORTING } from "@/constants/tv";
import { PaginationQuerySchema } from "./pagination";

export const CreateTvSchema = z.object({
    title: z.string({ required_error: "عنوان الزامی است" }).min(1, { message: "عنوان نباید خالی باشد" }).max(255, { message: "عنوان باید کمتر از 255 کاراکتر باشد" }),
    description: z.string({ required_error: "توضیحات الزامی است" }).min(1, { message: "توضیحات نباید خالی باشد" }).max(1024, { message: "توضیحات باید کمتر از 1024 کاراکتر باشد" }),
    slug: z.string().min(1, { message: "شناسه نباید خالی باشد" }).max(255, { message: "شناسه باید کمتر از 255 کاراکتر باشد" }),
    category: z.string({ required_error: "دسته‌بندی الزامی است" }).min(1, { message: "دسته‌بندی را انتخاب کنید" }),
    cover: z
        .string({ required_error: "تصویر کاور الزامی است" })
        .min(1, { message: "تصویر کاور نباید خالی باشد" })
        .regex(/^[\w-]+\.(jpg|jpeg|png|webp)$/, { message: "تصویر کاور فرمت نامعتبر است" }),
    video: z
        .string({ required_error: "ویدیو الزامی است" })
        .min(1, { message: "ویدیو نباید خالی باشد" })
        .regex(/^[\w-]+\.(mp4)$/, { message: "فرمت ویدیو نامعتبر است" }),
    attached: z.string().optional(),
    content: z.string().optional(),
    shown: z.boolean({ required_error: "مشخص کردن وضعیت نمایش الزامی است." }),
});

export type CreateTvSchemaType = z.infer<typeof CreateTvSchema> & { slug: string };

export const GetAllTvsQuerySchema = PaginationQuerySchema.extend({
    category: z
        .string({ required_error: "دسته‌بندی الزامی است" })
        .or(z.array(z.string({ required_error: "دسته‌بندی الزامی است" })))
        .optional(),
    sort: z.enum([SORTING.DEFAULT, SORTING.NEWEST, SORTING.OLDEST, SORTING.POPULAR], { message: "مقدار مرتب‌سازی نامعتبر است." }).default(SORTING.NEWEST),
    search: z.string().min(1, { message: "جستجو نباید خالی باشد" }).optional(),
});

export type GetAllTvsQuerySchemaType = z.infer<typeof GetAllTvsQuerySchema>;

export const SearchTvsQuerySchame = PaginationQuerySchema.extend({
    q: z.string({ message: "پرسش الزامی است" }).min(1, { message: "عنوان نباید خالی باشد" }),
});

export type SearchTvsQuerySchameType = z.infer<typeof SearchTvsQuerySchame>;
