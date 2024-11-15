import { z } from "zod";
import { SignupShcema } from "./auth";

export const UpdateAccountSchema = SignupShcema.pick({ fullname: true }).extend({
    username: z.string({ required_error: "وارد کردن نام کاربری الزامی است." }).min(3, { message: "نام کاربری باید حداقل ۳ کاراکتر باشد." }).max(255, { message: "نام کاربری باید حداکثر ۲۵۵ کاراکتر باشد." }),
    profile: z.string().url({ message: "آدرس پروفایل معتبر نیست." }).optional(),
});

export type UpdateAccountSchemaType = z.infer<typeof UpdateAccountSchema>;

export const ChangePasswordSchema = z.object({
    past: z.string({ required_error: "وارد کردن رمز عبور قدیمی الزامی است." }).min(7, { message: "رمز عبور قدیمی باید حداقل ۷ کاراکتر باشد." }).max(255, { message: "رمز عبور قدیمی باید حداکثر ۲۵۵ کاراکتر باشد." }),
    new: z.string({ required_error: "وارد کردن رمز عبور جدید الزامی است." }).min(7, { message: "رمز عبور جدید باید حداقل ۷ کاراکتر باشد." }).max(255, { message: "رمز عبور جدید باید حداکثر ۲۵۵ کاراکتر باشد." }),
});

export type ChangePasswordSchemaType = z.infer<typeof ChangePasswordSchema>;
