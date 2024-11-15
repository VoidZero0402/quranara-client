import { z } from "zod";
import { REFERENCES } from "@/constants/categories";
import { PaginationQuerySchema } from "./pagination";

export const CreateCategorySchema = z.object({
    title: z.string({ required_error: "وارد کردن عنوان الزامی است." }).min(1, { message: "عنوان نمی‌تواند خالی باشد." }).max(255, { message: "عنوان باید کمتر از ۲۵۵ کاراکتر باشد." }).trim(),
    caption: z.string({ required_error: "وارد کردن توضیحات الزامی است." }).min(1, { message: "توضیحات نمی‌تواند خالی باشد." }).max(255, { message: "توضیحات باید کمتر از ۲۵۵ کاراکتر باشد." }).trim(),
    ref: z.enum([REFERENCES.BLOG, REFERENCES.TV, REFERENCES.COURSE], { message: "مقدار ref فقط می‌تواند BLOG، TV یا COURSE باشد." }),
});

export type CreateCategorySchemaType = z.infer<typeof CreateCategorySchema>;

export const UpdateCategorySchema = CreateCategorySchema.omit({ ref: true });

export type UpdateCategorySchemaType = z.infer<typeof UpdateCategorySchema>;

export const GetAllCategoriesQuerySchema = PaginationQuerySchema.extend({
    ref: z.enum([REFERENCES.BLOG, REFERENCES.TV, REFERENCES.COURSE], { message: "مقدار ref فقط می‌تواند BLOG، TV یا COURSE باشد." }).default(REFERENCES.BLOG),
});

export type GetAllCategoriesQuerySchemaType = z.infer<typeof GetAllCategoriesQuerySchema>;
