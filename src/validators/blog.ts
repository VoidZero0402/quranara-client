import { z } from "zod";
import { SORTING, STATUS } from "@/constants/blog";
import { PaginationQuerySchema } from "./pagination";

export const CreateBlogSchema = z.object({
    title: z.string({ required_error: "عنوان الزامی است" }).min(1, { message: "عنوان نباید خالی باشد" }).max(255, { message: "عنوان نباید بیشتر از 255 کاراکتر باشد" }).trim(),
    description: z.string({ required_error: "توضیحات الزامی است" }).min(1, { message: "توضیحات نباید خالی باشد" }).max(1024, { message: "توضیحات نباید بیشتر از 1024 کاراکتر باشد" }).trim(),
    slug: z.string().min(1, { message: "لینک نباید خالی باشد" }).max(255, { message: "لینک نباید بیشتر از 255 کاراکتر باشد" }).trim().optional(),
    category: z.string({ required_error: "دسته‌بندی الزامی است" }),
    cover: z
        .string({ required_error: "تصویر الزامی است" })
        .min(1, { message: "تصویر نباید خالی باشد" })
        .regex(/^[\w-]+\.(jpg|jpeg|png|webp)$/, { message: "فرمت تصویر نامعتبر است" })
        .trim(),
    content: z.string({ required_error: "محتوا الزامی است" }).min(1, { message: "محتوا نباید خالی باشد" }).trim(),
    tags: z.array(z.string().min(1, { message: "برچسب نباید خالی باشد" }), { invalid_type_error: "برچسب‌ها باید آرایه‌ای از رشته‌ها باشند" }).optional(),
    relatedCourses: z.array(z.string({ required_error: "دوره الزامی است" }), { message: "دوره‌های مرتبط باید آرایه‌ای از شناسه‌های دوره باشند" }).optional(),
});

export type CreateBlogSchemaType = z.infer<typeof CreateBlogSchema> & { slug: string };

export const CreateBlogQuerySchema = z.object({
    status: z.enum([STATUS.DRAFTED, STATUS.PUBLISHED], { message: "وضعیت فقط می‌تواند DRAFTED یا PUBLISHED باشد" }).default(STATUS.DRAFTED),
});

export type CreateBlogQuerySchemaType = z.infer<typeof CreateBlogQuerySchema>;

export const GetAllBlogsQuerySchema = PaginationQuerySchema.extend({
    category: z
        .string({ required_error: "دسته‌بندی ضروری است" })
        .or(z.array(z.string({ required_error: "دسته‌بندی ضروری است" })))
        .optional(),
    sort: z.enum([SORTING.NEWEST, SORTING.OLDEST, SORTING.POPULAR]).default(SORTING.NEWEST),
    search: z.string().min(1, { message: "کوئری نباید خالی باشد" }).optional(),
});

export type GetAllBlogsQuerySchemaType = z.infer<typeof GetAllBlogsQuerySchema>;

export const SearchBlogsQuerySchame = PaginationQuerySchema.extend({
    q: z.string({ message: "کوئری ضروری است" }).min(1, { message: "کوئری نباید خالی باشد" }).trim(),
});

export type SearchBlogsQuerySchameType = z.infer<typeof SearchBlogsQuerySchame>;
