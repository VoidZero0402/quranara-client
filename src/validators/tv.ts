import { z } from "zod";
import { SORTING } from "@/constants/tv";
import { PaginationQuerySchema } from "./pagination";

export const CreateTvSchema = z.object({
    title: z.string({ required_error: "لطفاً عنوان را وارد کنید." }).min(1, { message: "عنوان نمی‌تواند خالی باشد." }).max(255, { message: "عنوان باید کمتر از ۲۵۵ کاراکتر باشد." }),
    description: z.string({ required_error: "لطفاً توضیحات را وارد کنید." }).min(1, { message: "توضیحات نمی‌تواند خالی باشد." }).max(1024, { message: "توضیحات باید کمتر از ۱۰۲۴ کاراکتر باشد." }),
    slug: z.string().min(1, { message: "شناسه نمی‌تواند خالی باشد." }).max(255, { message: "شناسه باید کمتر از ۲۵۵ کاراکتر باشد." }),
    category: z.string({ required_error: "لطفاً یک دسته‌بندی انتخاب کنید." }).min(1, { message: "دسته‌بندی الزامی است." }),
    cover: z
        .string({ required_error: "تصویر کاور الزامی است." })
        .min(1, { message: "تصویر کاور نمی‌تواند خالی باشد." })
        .regex(/^[\w-\/\:\.]+\.(jpg|jpeg|png|webp)$/, { message: "فرمت تصویر کاور معتبر نیست." }),
    video: z
        .string({ required_error: "لطفاً ویدیو را وارد کنید." })
        .min(1, { message: "ویدیو نمی‌تواند خالی باشد." })
        .regex(/^[\w-\/\:\.]+\.(mp4)$/, { message: "فرمت ویدیو معتبر نیست." }),
    attached: z.string().optional(),
    content: z.string().optional(),
    shown: z.boolean({ required_error: "لطفاً وضعیت نمایش را مشخص کنید." }),
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
    q: z.string({ message: "لطفاً یک پرسش وارد کنید." }).min(1, { message: "عنوان جستجو نمی‌تواند خالی باشد." }),
});

export type SearchTvsQuerySchameType = z.infer<typeof SearchTvsQuerySchame>;
