import Quranara from "../clients/Quranara";

import { GetAllCategoriesQuerySchemaType, GetCategoriesSummarySchemaType } from "@/validators/categories";

import { Response, Pagination } from "@/types/response.types";
import { Category, SummaryCategory } from "@/types/category.types";

export function getCategories(query: GetAllCategoriesQuerySchemaType): Promise<Response<{ categories: Category[]; pagination: Pagination }>> {
    return Quranara.get("/categories", {
        query,
    });
}

export function getCategoriesSummary(query: GetCategoriesSummarySchemaType): Promise<Response<{ categories: SummaryCategory[]; pagination: Pagination }>> {
    return Quranara.get("/categories/summary", {
        query,
    });
}
