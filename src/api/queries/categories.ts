import { convertToQueryString } from "@/libs/funcs";
import Quranara from "../clients/Quranara";
import { GetAllCategoriesQuerySchemaType } from "@/validators/categories";

export function getCategories(query: GetAllCategoriesQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/categories?${queryString}`;

    return Quranara.get(url);
}
