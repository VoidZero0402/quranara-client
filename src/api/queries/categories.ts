import Quranara from "../clients/Quranara";

import { GetAllCategoriesQuerySchemaType, GetCategoriesSummarySchemaType } from "@/validators/categories";

import { convertToQueryString } from "@/libs/funcs";

import { Response, Pagination } from "@/types/response.types";
import { Category, SummaryCategory } from "@/types/category.types";

export function getCategories(query: GetAllCategoriesQuerySchemaType): Promise<Response<{ categories: Category[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/categories?${queryString}`;

    return Quranara.get(url);
}

export function getCategoriesSummary(query: GetCategoriesSummarySchemaType): Promise<Response<{ categories: SummaryCategory[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/categories/summary?${queryString}`;

    return Quranara.get(url);
}
