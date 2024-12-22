import { z } from "zod";
import { SORTING, STATUS } from "@/constants/courses";
import { PaginationQuerySchema } from "./pagination";

export const CreateCourseSchema = z.object({
    title: z.string({ required_error: "وارد کردن عنوان الزامی است." }).min(1, { message: "عنوان نمی‌تواند خالی باشد." }).max(255, { message: "عنوان باید کمتر از ۲۵۵ کاراکتر باشد." }),
    slug: z.string().min(1, { message: "اسلاگ نمی‌تواند خالی باشد." }).max(255, { message: "اسلاگ باید کمتر از ۲۵۵ کاراکتر باشد." }).optional(),
    description: z.string({ required_error: "وارد کردن توضیحات الزامی است." }).min(1, { message: "توضیحات نمی‌تواند خالی باشد." }).max(1024, { message: "توضیحات باید کمتر از ۱۰۲۴ کاراکتر باشد." }),
    cover: z
        .string({ required_error: "وارد کردن کاور الزامی است." })
        .min(1, { message: "کاور نمی‌تواند خالی باشد." })
        .regex(/^[\w-]+\.(jpg|jpeg|png|webp)$/, { message: "فرمت فایل کاور معتبر نیست." })
        .trim(),
    price: z.number({ required_error: "وارد کردن قیمت الزامی است." }).min(0, { message: "قیمت نمی‌تواند منفی باشد." }),
    status: z.enum([STATUS.PRE_SELL, STATUS.ON_PERFORMING, STATUS.REACHED], { message: "وضعیت فقط می‌تواند یکی از PRE_SELL، ON_PERFORMING یا REACHED باشد." }).default(STATUS.PRE_SELL),
    shown: z.boolean({ required_error: "مشخص کردن وضعیت نمایش الزامی است." }),
    introduction: z
        .object({
            video: z
                .string()
                .min(1, { message: "ویدئو نمی‌تواند خالی باشد." })
                .regex(/^[\w-]+\.(mp4)$/, { message: "فرمت فایل ویدئو معتبر نیست." })
                .trim()
                .optional(),
            content: z.string().min(1, { message: "محتوا نمی‌تواند خالی باشد." }).optional(),
        })
        .optional(),
    metadata: z.object(
        {
            support: z.string({ required_error: "وارد کردن پشتیبانی الزامی است." }).min(1, { message: "پشتیبانی نمی‌تواند خالی باشد." }),
            preRequisite: z.string({ required_error: "وارد کردن پیش‌نیاز الزامی است." }).min(1, { message: "پیش‌نیاز نمی‌تواند خالی باشد." }),
            present: z.string({ required_error: "وارد کردن ارائه‌کننده الزامی است." }).min(1, { message: "ارائه‌کننده نمی‌تواند خالی باشد." }),
            hours: z.number({ required_error: "وارد کردن ساعت الزامی است." }).positive({ message: "ساعت نمی‌تواند منفی باشد." }),
        },
        { required_error: "وارد کردن اطلاعات متادیتا الزامی است." }
    ),
});

export type CreateCourseSchemaType = z.infer<typeof CreateCourseSchema> & { slug: string };

export const UpdateCourseSchema = CreateCourseSchema.omit({ shown: true }).extend({
    discount: z.number().min(0, { message: "تخفیف نمی‌تواند منفی باشد." }).max(100, { message: "تخفیف نمی‌تواند بیشتر از ۱۰۰ درصد باشد." }).optional(),
});

export type UpdateCourseSchemaType = z.infer<typeof UpdateCourseSchema>;

export const UpdateCourseOrderSchema = z
    .object({
        from: z.number({ required_error: "وارد کردن مقدار 'از' الزامی است." }).min(1, { message: "مقدار 'از' نمی‌تواند صفر یا منفی باشد." }),
        to: z.number({ required_error: "وارد کردن مقدار 'به' الزامی است." }).min(1, { message: "مقدار 'به' نمی‌تواند صفر یا منفی باشد." }),
    })
    .refine((values) => values.from !== values.to, {
        path: ["from-to"],
        params: ["from", "to"],
        message: "مقادیر 'از' و 'به' نمی‌توانند یکسان باشند.",
    });

export type UpdateCourseOrderSchemaType = z.infer<typeof UpdateCourseOrderSchema>;

export const GetAllCoursesQuerySchema = PaginationQuerySchema.extend({
    sort: z.enum([SORTING.DEFAULT, SORTING.NEWSET, SORTING.OLDEST, SORTING.POPULAR], { message: "مقدار مرتب‌سازی نامعتبر است." }).default(SORTING.DEFAULT),
    search: z.string().min(1, { message: "عبارت جستجو نمی‌تواند خالی باشد." }).optional(),
});

export type GetAllCoursesQuerySchemaType = z.infer<typeof GetAllCoursesQuerySchema>;

export const SearchCoursesQuerySchame = PaginationQuerySchema.extend({
    q: z.string({ required_error: "وارد کردن مقدار 'q' الزامی است." }).min(1, { message: "'q' نمی‌تواند خالی باشد." }),
});

export type SearchCoursesQuerySchameType = z.infer<typeof SearchCoursesQuerySchame>;

export const DiscountAllSchema = z.object({
    discount: z.coerce.number().min(0, { message: "تخفیف نمی‌تواند منفی باشد." }).max(100, { message: "تخفیف نمی‌تواند بیشتر از ۱۰۰ درصد باشد." }),
});

export type DiscountAllSchemaType = z.infer<typeof DiscountAllSchema>;
