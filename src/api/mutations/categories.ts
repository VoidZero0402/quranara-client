import Quranara from "../clients/Quranara";

import { CreateCategorySchemaType, UpdateCategorySchemaType } from "@/validators/categories";

import { MessageResponse } from "@/types/response.types";

type CategoriesQueriesWithIdParams = { categoryId: string };

export function createCategory(data: CreateCategorySchemaType): MessageResponse {
    return Quranara.post("/categories", {
        body: JSON.stringify(data),
    });
}

export function updateCategory(params: CategoriesQueriesWithIdParams, data: UpdateCategorySchemaType): MessageResponse {
    const url = `/categories/${params.categoryId}`;

    return Quranara.put(url, {
        body: JSON.stringify(data),
    });
}
