import { z } from "zod";
import { SignupSchema } from "./auth";
import { PaginationQuerySchema } from "./pagination";

export const BanUserSchema = z.object({
    user: z.string({ required_error: "لطفاً نام کاربر را وارد کنید." }),
});

export type BanUserSchemaType = z.infer<typeof BanUserSchema>;

export const UnbanUserSchema = z.object({
    ban: z.string({ required_error: "لطفاً دلیل ممنوعیت را وارد کنید." }),
});

export type UnbanUserSchemaType = z.infer<typeof UnbanUserSchema>;

export const CreateUserSchema = SignupSchema.omit({ otp: true });

export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;

export const SigningCourseSchema = z.object({
    user: z.string({ required_error: "لطفاً نام کاربر را وارد کنید." }),
    course: z.string({ required_error: "لطفاً نام دوره را وارد کنید." }),
});

export type SigningCourseSchemaType = z.infer<typeof SigningCourseSchema>;

export const GetAllUsersQuerySchema = PaginationQuerySchema.extend({
    search: z.string({ message: "لطفاً یک کوئری وارد کنید." }).min(1, { message: "کوئری جستجو نمی‌تواند خالی باشد." }).optional(),
});

export type GetAllUsersQuerySchemaType = z.infer<typeof GetAllUsersQuerySchema>;
