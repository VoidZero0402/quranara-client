import { z } from "zod";
import { REFERENCES } from "@/constants/polls";

const OptionsSchema = z
    .array(
        z.object({
            text: z.string({ required_error: "وارد کردن متن گزینه الزامی است." }).min(1, { message: "متن گزینه نمی‌تواند خالی باشد." }).max(255, { message: "متن گزینه باید کمتر از ۲۵۵ کاراکتر باشد." }).trim(),
        }),
        { required_error: "وارد کردن گزینه‌ها الزامی است." }
    )
    .min(2, { message: "حداقل تعداد گزینه‌ها باید ۲ باشد." })
    .refine(
        (value) => {
            const texts = value.map((option) => option.text);
            const uniqueTexts = new Set(texts);

            return texts.length === uniqueTexts.size;
        },
        {
            params: ["options", "unique"],
            path: ["options", "unique"],
            message: "متن گزینه‌ها باید یکتا باشند.",
        }
    );

export const CreatePollSchema = z.object({
    title: z.string({ required_error: "وارد کردن عنوان الزامی است." }).min(1, { message: "عنوان نمی‌تواند خالی باشد." }).max(255, { message: "عنوان باید کمتر از ۲۵۵ کاراکتر باشد." }).trim(),
    identifier: z.string({ required_error: "وارد کردن شناسه الزامی است." }).min(1, { message: "شناسه نمی‌تواند خالی باشد." }).max(255, { message: "شناسه باید کمتر از ۲۵۵ کاراکتر باشد." }).trim(),
    description: z.string({ required_error: "وارد کردن توضیحات الزامی است." }).min(1, { message: "توضیحات نمی‌تواند خالی باشد." }).max(1024, { message: "توضیحات باید کمتر از ۱۰۲۴ کاراکتر باشد." }).trim().optional(),
    ref: z.enum([REFERENCES.BLOG], { message: "مقدار ref فقط می‌تواند BLOG باشد." }).default(REFERENCES.BLOG),
    options: OptionsSchema,
});

export type CreatePollSchemaType = z.infer<typeof CreatePollSchema>;

export const UpdatePollSchema = CreatePollSchema.omit({ ref: true });

export type UpdatePollSchemaType = z.infer<typeof UpdatePollSchema>;

export const VoutePollSchema = z.object({
    option: z.string({ required_error: "وارد کردن گزینه الزامی است." }).min(1, { message: "گزینه نمی‌تواند خالی باشد." }).max(255, { message: "گزینه باید کمتر از ۲۵۵ کاراکتر باشد." }).trim(),
});

export type VoutePollSchemaType = z.infer<typeof VoutePollSchema>;
