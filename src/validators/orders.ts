import { z } from "zod";

export const CreateOrderSchema = z.object({
    discountCode: z.string().min(1, { message: "کد تخفیف نمی‌تواند خالی باشد." }).optional(),
});

export type CreateOrderSchemaType = z.infer<typeof CreateOrderSchema>;
