import Quranara from "../clients/Quranara";
import { GetAllUsersQuerySchemaType } from "@/validators/users";
import { PaginationQuerySchemaType } from "@/validators/pagination";
import { convertToQueryString } from "@/libs/funcs";

export function getAllUsers(query: GetAllUsersQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/users?${queryString}`;

    return Quranara.get(url);
}

export function getAllBan(query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/users/ban?${queryString}`;
}
