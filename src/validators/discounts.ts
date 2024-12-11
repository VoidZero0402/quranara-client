import { z } from "zod";

export const CreateDiscountSchema = z.object({
    code: z.string({ required_error: "وارد کردن کد الزامی است." }).min(1, { message: "کد تخفیف نمی‌تواند خالی باشد." }).max(128, { message: "کد باید کمتر از ۱۲۸ کاراکتر باشد." }).trim(),
    percent: z.number({ required_error: "وارد کردن درصد الزامی است." }).min(1, { message: "حداقل مقدار درصد ۱ است." }).max(100, { message: "حداکثر مقدار درصد ۱۰۰ است." }),
    course: z.string().optional(),
    max: z.number({ required_error: "وارد کردن مقدار حداکثر الزامی است." }).min(1, { message: "حداقل مقدار حداکثر ۱ است." }).max(9999, { message: "حداکثر مقدار حداکثر ۹۹۹۹ است." }),
    expireAtTime: z.number({ required_error: "وارد کردن زمان انقضا الزامی است." }),
});

export type CreateDiscountSchemaType = z.infer<typeof CreateDiscountSchema>;

export const AvailableDiscountQuerySchema = CreateDiscountSchema.pick({ code: true, course: true });

export type AvailableDiscountQuerySchemaType = z.infer<typeof AvailableDiscountQuerySchema>;
