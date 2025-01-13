import { z } from "zod";

export const TiptapSetLinkSchema = z.object({
    link: z.string({ required_error: "لطفاً لینک را وارد کنید." }).url({ message: "لینک معتبر نیست" }),
});

export type TiptapSetLinkSchemaType = z.infer<typeof TiptapSetLinkSchema>;

export const TiptapSetImageSchema = z.object({
    src: z.string({ required_error: "لطفاً آدرس تصویر را وارد کنید" }).url({ message: "آدرس تصویر معتبر نیست" }),
    alt: z.string({ required_error: "لطفا توضیحات را وارد کنید" }).min(1, { message: "توضیحات نمی‌تواند خالی باشد" }),
});

export type TiptapSetImageSchemaType = z.infer<typeof TiptapSetImageSchema>;
