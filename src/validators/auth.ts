import { z } from "zod";

export const SignupShcema = z.object({
    phone: z
        .string({ required_error: "وارد کردن شماره موبایل الزامی است." })
        .trim()
        .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g, { message: "فرمت شماره موبایل معتبر نیست." }),
    email: z
        .string({ required_error: "وارد کردن ایمیل الزامی است." })
        .trim()
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g, { message: "فرمت ایمیل معتبر نیست." }),
    fullname: z.string({ required_error: "وارد کردن نام کامل الزامی است." }).min(3, { message: "نام کامل باید حداقل ۳ کاراکتر باشد." }).max(255, { message: "نام کامل باید حداکثر ۲۵۵ کاراکتر باشد." }),
    password: z.string({ required_error: "وارد کردن رمز عبور الزامی است." }).min(7, { message: "رمز عبور باید حداقل ۷ کاراکتر باشد." }).max(255, { message: "رمز عبور باید حداکثر ۲۵۵ کاراکتر باشد." }),
    otp: z.string({ required_error: "وارد کردن کد تأیید الزامی است." }).regex(/^[0-9]{5}$/, { message: "کد تأیید باید یک عدد ۵ رقمی باشد." }),
});

export type SignupShcemaType = z.infer<typeof SignupShcema>;

export const SendOtpSchema = SignupShcema.pick({ phone: true });

export type SendOtpSchemaType = z.infer<typeof SendOtpSchema>;

export const LoginWithOtpSchema = SignupShcema.pick({ phone: true, otp: true });

export type LoginWithOtpSchemaType = z.infer<typeof LoginWithOtpSchema>;

export const LoginWithEmailSchema = SignupShcema.pick({ email: true, password: true });

export type LoginWithEmailSchemaType = z.infer<typeof LoginWithEmailSchema>;
