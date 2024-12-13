import { z } from "zod";

export const CreateNotificationSchema = z.object({
    title: z.string({ required_error: "وارد کردن عنوان الزامی است." }).min(1, { message: "عنوان نمی‌تواند خالی باشد." }).max(255, { message: "عنوان باید کمتر از ۲۵۵ کاراکتر باشد." }),
    description: z.string({ required_error: "وارد کردن توضیحات الزامی است." }).min(1, { message: "توضیحات نمی‌تواند خالی باشد." }).max(4098, { message: "توضیحات باید کمتر از ۴۰۹۸ کاراکتر باشد." }),
});

export type CreateNotificationSchemaType = z.infer<typeof CreateNotificationSchema>;

export const SendAllNotificationSchema = CreateNotificationSchema;

export type SendAllNotificationSchemaType = z.infer<typeof SendAllNotificationSchema>;

export const SendCourseRegistersNotificationSchema = CreateNotificationSchema.extend({
    course: z.string({ required_error: "انتخاب دوره الزامی است." }),
});

export type SendCourseRegistersNotificationSchemaType = z.infer<typeof SendCourseRegistersNotificationSchema>;

export const SendOneNotificationSchema = CreateNotificationSchema.extend({
    user: z.string({ required_error: "انتخاب کاربر الزامی است." }),
});

export type SendOneNotificationSchemaType = z.infer<typeof SendOneNotificationSchema>;
