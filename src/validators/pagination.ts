import { z } from "zod";

export const PaginationQuerySchema = z.object({
    page: z.coerce.number().default(1).transform(String),
    limit: z.coerce.number().min(5).max(100).default(10).transform(String),
});

export type PaginationQuerySchemaType = z.infer<typeof PaginationQuerySchema>;
