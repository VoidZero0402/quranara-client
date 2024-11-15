import Quranara from "../clients/Quranara";
import { CreateCategorySchemaType, UpdateCategorySchemaType } from "@/validators/categories";

export function createCategory(data: CreateCategorySchemaType) {
    return Quranara.post("/categories", {
        body: JSON.stringify(data),
    });
}

type UpdateCategoryParams = { categoryId: string };

export function updateCategory(params: UpdateCategoryParams, data: UpdateCategorySchemaType) {
    const url = `/categories/${params.categoryId}`;

    return Quranara.put(url, {
        body: JSON.stringify(data),
    });
}
