import { z } from "zod";
import { SORTING } from "@/constants/blog";
import { PaginationQuerySchema } from "./pagination";

export const CreateBlogSchema = z.object({
    title: z.string({ required_error: "عنوان الزامی است" }).min(1, { message: "عنوان نباید خالی باشد" }).max(255, { message: "عنوان نباید بیشتر از 255 کاراکتر باشد" }),
    description: z.string({ required_error: "توضیحات الزامی است" }).min(1, { message: "توضیحات نباید خالی باشد" }).max(1024, { message: "توضیحات نباید بیشتر از 1024 کاراکتر باشد" }),
    slug: z.string().min(1, { message: "شناسه نباید خالی باشد" }).max(255, { message: "شناسه باید کمتر از 255 کاراکتر باشد" }),
    category: z.string({ required_error: "دسته‌بندی الزامی است" }).min(1, { message: "دسته‌بندی را انتخاب کنید" }),
    cover: z
        .string({ required_error: "تصویر الزامی است" })
        .min(1, { message: "تصویر نباید خالی باشد" })
        .regex(/^[\w-\/\:\.]+\.(jpg|jpeg|png|webp)$/, { message: "فرمت تصویر نامعتبر است" })
        .trim(),
    content: z.string({ required_error: "محتوا الزامی است" }).min(1, { message: "محتوا نباید خالی باشد" }),
    relatedCourses: z.array(z.string({ required_error: "دوره الزامی است" }), { message: "دوره‌های مرتبط باید آرایه‌ای از شناسه‌های دوره باشند" }).optional(),
    shown: z.boolean({ required_error: "مشخص کردن وضعیت نمایش الزامی است." }),
});

export type CreateBlogSchemaType = z.infer<typeof CreateBlogSchema> & { slug: string };

export const GetAllBlogsQuerySchema = PaginationQuerySchema.extend({
    category: z
        .string({ required_error: "دسته‌بندی ضروری است" })
        .or(z.array(z.string({ required_error: "دسته‌بندی ضروری است" })))
        .optional(),
    sort: z.enum([SORTING.DEFAULT, SORTING.NEWEST, SORTING.OLDEST, SORTING.POPULAR]).default(SORTING.NEWEST),
    search: z.string().min(1, { message: "کوئری نباید خالی باشد" }).optional(),
});

export type GetAllBlogsQuerySchemaType = z.infer<typeof GetAllBlogsQuerySchema>;

export const SearchBlogsQuerySchame = PaginationQuerySchema.extend({
    q: z.string({ message: "کوئری ضروری است" }).min(1, { message: "کوئری نباید خالی باشد" }),
});

export type SearchBlogsQuerySchameType = z.infer<typeof SearchBlogsQuerySchame>;
