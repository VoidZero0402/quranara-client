import { z } from "zod";
import { SignupSchema } from "./auth";

export const UpdateAccountSchema = SignupSchema.pick({ fullname: true }).extend({
    username: z.string({ required_error: "وارد کردن نام کاربری الزامی است." }).min(3, { message: "نام کاربری باید حداقل ۳ کاراکتر باشد." }).max(255, { message: "نام کاربری نمی‌تواند بیشتر از ۲۵۵ کاراکتر باشد." }),
    profile: z.string().optional(),
    age: z.coerce.number().min(2, { message: "سن باید حداقل ۲ سال باشد." }).max(100, { message: "سن نمی‌تواند بیشتر از ۱۰۰ سال باشد." }).optional(),
    city: z.string().optional(),
});

export type UpdateAccountSchemaType = z.infer<typeof UpdateAccountSchema>;

export const ChangePasswordSchema = z.object({
    past: z.string({ required_error: "وارد کردن رمز عبور فعلی الزامی است." }).min(7, { message: "رمز عبور فعلی باید حداقل ۷ کاراکتر باشد." }).max(255, { message: "رمز عبور فعلی نمی‌تواند بیشتر از ۲۵۵ کاراکتر باشد." }),
    new: z.string({ required_error: "وارد کردن رمز عبور جدید الزامی است." }).min(7, { message: "رمز عبور جدید باید حداقل ۷ کاراکتر باشد." }).max(255, { message: "رمز عبور جدید نمی‌تواند بیشتر از ۲۵۵ کاراکتر باشد." }),
});

export type ChangePasswordSchemaType = z.infer<typeof ChangePasswordSchema>;
