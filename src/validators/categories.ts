import { z } from "zod";
import { REFERENCES } from "@/constants/categories";
import { PaginationQuerySchema } from "./pagination";

export const CreateCategorySchema = z.object({
    title: z.string({ required_error: "لطفاً عنوان را وارد کنید." }).min(1, { message: "عنوان نمی‌تواند خالی باشد." }).max(255, { message: "عنوان نمی‌تواند بیشتر از ۲۵۵ کاراکتر باشد." }),
    caption: z.string({ required_error: "لطفاً توضیحات را وارد کنید." }).min(1, { message: "توضیحات نمی‌تواند خالی باشد." }).max(255, { message: "توضیحات نمی‌تواند بیشتر از ۲۵۵ کاراکتر باشد." }),
    ref: z.enum([REFERENCES.BLOG, REFERENCES.TV, REFERENCES.COURSE, REFERENCES.DISCUSSION], { message: "لطفاً یک منبع را انتخاب کنید" }),
});

export type CreateCategorySchemaType = z.infer<typeof CreateCategorySchema>;

export const UpdateCategorySchema = CreateCategorySchema.omit({ ref: true });

export type UpdateCategorySchemaType = z.infer<typeof UpdateCategorySchema>;

export const GetAllCategoriesQuerySchema = PaginationQuerySchema.extend({
    ref: z.enum([REFERENCES.BLOG, REFERENCES.TV, REFERENCES.COURSE, REFERENCES.DISCUSSION], { message: "لطفاً یک منبع را انتخاب کنید" }).optional(),
});

export type GetAllCategoriesQuerySchemaType = z.infer<typeof GetAllCategoriesQuerySchema>;

export const GetCategoriesSummarySchema = GetAllCategoriesQuerySchema.pick({ ref: true });

export type GetCategoriesSummarySchemaType = z.infer<typeof GetCategoriesSummarySchema>;
