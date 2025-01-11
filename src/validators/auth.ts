import { z } from "zod";

export const SignupSchema = z.object({
    phone: z.string({ required_error: "لطفاً شماره موبایل خود را وارد کنید." }).regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g, {
        message: "شماره موبایل وارد شده معتبر نیست.",
    }),
    fullname: z.string({ required_error: "لطفاً نام کامل خود را وارد کنید." }).min(3, { message: "نام کامل باید حداقل ۳ کاراکتر داشته باشد." }).max(255, { message: "نام کامل نمی‌تواند بیشتر از ۲۵۵ کاراکتر باشد." }),
    password: z.string({ required_error: "لطفاً رمز عبور خود را وارد کنید." }).min(7, { message: "رمز عبور باید حداقل ۷ کاراکتر داشته باشد." }).max(255, { message: "رمز عبور نمی‌تواند بیشتر از ۲۵۵ کاراکتر باشد." }),
    otp: z.string({ required_error: "لطفاً کد تأیید خود را وارد کنید." }).regex(/^[0-9]{5}$/, { message: "کد تأیید باید شامل یک عدد ۵ رقمی باشد." }),
});

export type SignupSchemaType = z.infer<typeof SignupSchema>;

export const SignupFormSchema = SignupSchema.omit({ otp: true });

export type SignupFormSchemaType = z.infer<typeof SignupFormSchema>;

export const SendOtpSchema = SignupSchema.pick({ phone: true });

export type SendOtpSchemaType = z.infer<typeof SendOtpSchema>;

export const LoginWithOtpSchema = SignupSchema.pick({ phone: true, otp: true });

export type LoginWithOtpSchemaType = z.infer<typeof LoginWithOtpSchema>;

export const LoginWithOtpFormSchema = LoginWithOtpSchema.omit({ otp: true });

export type LoginWithOtpFormSchemaType = z.infer<typeof LoginWithOtpFormSchema>;

export const LoginWithPasswordchema = SignupSchema.pick({ phone: true, password: true });

export type LoginWithPasswordchemaType = z.infer<typeof LoginWithPasswordchema>;
