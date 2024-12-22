import { z } from "zod";

export const CreateDiscountSchema = z.object({
    code: z.string({ required_error: "وارد کردن کد الزامی است." }).min(1, { message: "کد تخفیف نمی‌تواند خالی باشد." }).max(128, { message: "کد باید کمتر از ۱۲۸ کاراکتر باشد." }),
    percent: z.coerce.number({ required_error: "وارد کردن درصد الزامی است." }).min(1, { message: "حداقل مقدار درصد ۱ است." }).max(100, { message: "حداکثر مقدار درصد ۱۰۰ است." }),
    course: z.string().optional(),
    max: z.coerce.number({ required_error: "وارد کردن مقدار حداکثر الزامی است." }).min(1, { message: "حداقل مقدار حداکثر ۱ است." }).max(9999, { message: "حداکثر مقدار حداکثر ۹۹۹۹ است." }),
    expireAtTime: z.coerce.number({ required_error: "وارد کردن زمان انقضا الزامی است." }).min(1, { message: "حداقل مقدار زمان انتضا ۱ است." }).max(9999, { message: "حداکثر مقدار زمان انتضا ۹۹۹۹ است." }),
});

export type CreateDiscountSchemaType = z.infer<typeof CreateDiscountSchema>;

export const UpdateDiscountSchema = CreateDiscountSchema.extend({
    expireAtTime: z
        .string()
        .transform((val) => (val === "" ? undefined : Number(val)))
        .optional()
        .pipe(z.number().min(1, { message: "حداقل مقدار زمان انقضا ۱ است." }).max(9999, { message: "حداکثر مقدار زمان انقضا ۹۹۹۹ است." }).optional()),
});

export type UpdateDiscountSchemaType = z.infer<typeof UpdateDiscountSchema>;

export const AvailableDiscountQuerySchema = CreateDiscountSchema.pick({ code: true, course: true });

export type AvailableDiscountQuerySchemaType = z.infer<typeof AvailableDiscountQuerySchema>;
