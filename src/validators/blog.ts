import { z } from "zod";
import { SORTING } from "@/constants/blog";
import { PaginationQuerySchema } from "./pagination";

export const CreateBlogSchema = z.object({
    title: z.string({ required_error: "لطفاً عنوان مطلب را وارد کنید." }).min(1, { message: "عنوان نمی‌تواند خالی باشد." }).max(255, { message: "عنوان نمی‌تواند بیش از ۲۵۵ کاراکتر باشد." }),
    description: z.string({ required_error: "لطفاً توضیحات مطلب را وارد کنید." }).min(1, { message: "توضیحات نمی‌تواند خالی باشد." }).max(1024, { message: "توضیحات نمی‌تواند بیش از ۱۰۲۴ کاراکتر باشد." }),
    slug: z.string().min(1, { message: "شناسه مطلب نمی‌تواند خالی باشد." }).max(255, { message: "شناسه مطلب نمی‌تواند بیش از ۲۵۵ کاراکتر باشد." }),
    category: z.string({ required_error: "لطفاً یک دسته‌بندی انتخاب کنید." }).min(1, { message: "انتخاب دسته‌بندی الزامی است." }),
    cover: z
        .string({ required_error: "لطفاً تصویر مطلب را وارد کنید." })
        .min(1, { message: "تصویر نمی‌تواند خالی باشد." })
        .regex(/^[\w-\/\:\.]+\.(jpg|jpeg|png|webp)$/, { message: "فرمت تصویر معتبر نیست. از فرمت‌های jpg، jpeg، png یا webp استفاده کنید." }),
    content: z.string({ required_error: "لطفاً محتوای مطلب را وارد کنید." }).min(1, { message: "محتوا نمی‌تواند خالی باشد." }),
    relatedCourses: z.array(z.string({ required_error: "شناسه دوره الزامی است." }), { message: "دوره‌های مرتبط باید به صورت آرایه‌ای از شناسه‌های دوره باشند." }).optional(),
    shown: z.boolean({ required_error: "لطفاً وضعیت نمایش مطلب را مشخص کنید." }),
});

export type CreateBlogSchemaType = z.infer<typeof CreateBlogSchema> & { slug: string };

export const GetAllBlogsQuerySchema = PaginationQuerySchema.extend({
    category: z
        .string({ required_error: "لطفاً یک دسته‌بندی انتخاب کنید." })
        .or(z.array(z.string({ required_error: "لطفاً دسته‌بندی‌های موردنظر را مشخص کنید." })))
        .optional(),
    sort: z.enum([SORTING.DEFAULT, SORTING.NEWEST, SORTING.OLDEST, SORTING.POPULAR]).default(SORTING.NEWEST),
    search: z.string().min(1, { message: "متن جستجو نمی‌تواند خالی باشد." }).optional(),
});

export type GetAllBlogsQuerySchemaType = z.infer<typeof GetAllBlogsQuerySchema>;

export const SearchBlogsQuerySchema = PaginationQuerySchema.extend({
    q: z.string({ required_error: "لطفاً متن جستجو را وارد کنید." }).min(1, { message: "متن جستجو نمی‌تواند خالی باشد." }),
});

export type SearchBlogsQuerySchameType = z.infer<typeof SearchBlogsQuerySchema>;
