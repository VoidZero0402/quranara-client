import { z } from "zod";

export const CreateDiscountSchema = z.object({
    code: z.string({ required_error: "لطفاً کد تخفیف را وارد کنید." }).min(1, { message: "کد تخفیف نمی‌تواند خالی باشد." }).max(128, { message: "طول کد تخفیف باید کمتر از ۱۲۸ کاراکتر باشد." }),
    percent: z.coerce.number({ required_error: "لطفاً درصد تخفیف را وارد کنید." }).min(1, { message: "حداقل درصد تخفیف باید ۱ باشد." }).max(100, { message: "حداکثر درصد تخفیف نمی‌تواند بیشتر از ۱۰۰ باشد." }),
    course: z.string().optional(),
    max: z.coerce.number({ required_error: "لطفاً مقدار حداکثر استفاده را وارد کنید." }).min(1, { message: "حداقل مقدار حداکثر استفاده باید ۱ باشد." }).max(9999, { message: "حداکثر مقدار استفاده نمی‌تواند بیشتر از ۹۹۹۹ باشد." }),
    expireAtTime: z.coerce.number({ required_error: "لطفاً زمان انقضای تخفیف را وارد کنید." }).min(1, { message: "حداقل زمان انقضا باید ۱ باشد." }).max(9999, { message: "حداکثر زمان انقضا نمی‌تواند بیشتر از ۹۹۹۹ باشد." }),
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
