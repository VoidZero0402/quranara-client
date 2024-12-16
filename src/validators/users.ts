import { z } from "zod";
import { SignupShcema } from "./auth";
import { PaginationQuerySchema } from "./pagination";

export const BanUserSchema = z.object({
    user: z.string({ required_error: "کاربر الزامی است" }),
});

export type BanUserSchemaType = z.infer<typeof BanUserSchema>;

export const UnbanUserSchema = z.object({
    ban: z.string({ required_error: "ممنوعیت الزامی است" }),
});

export type UnbanUserSchemaType = z.infer<typeof UnbanUserSchema>;

export const CreateUserSchema = SignupShcema.omit({ otp: true });

export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;

export const SigningCourseSchema = z.object({
    user: z.string({ required_error: "کاربر الزامی است" }),
    course: z.string({ required_error: "دوره الزامی است" }),
});

export type SigningCourseSchemaType = z.infer<typeof SigningCourseSchema>;

export const GetAllUsersQuerySchema = PaginationQuerySchema.extend({
    search: z.string({ message: "کوئری الزامی است" }).min(1, { message: "کوئری نباید خالی باشد" }).optional(),
});

export type GetAllUsersQuerySchemaType = z.infer<typeof GetAllUsersQuerySchema>;
