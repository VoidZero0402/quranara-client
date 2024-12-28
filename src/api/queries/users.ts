import Quranara from "../clients/Quranara";

import { GetAllUsersQuerySchemaType } from "@/validators/users";
import { PaginationQuerySchemaType } from "@/validators/pagination";

import { Pagination, Response } from "@/types/response.types";
import { User } from "@/types/user.types";
import { Ban } from "@/types/ban.types";

export function getAllUsers(query: GetAllUsersQuerySchemaType): Promise<Response<{ users: User[]; pagination: Pagination }>> {
    return Quranara.get("/users", {
        query,
    });
}

export function getAllBan(query: PaginationQuerySchemaType): Promise<Response<{ bans: Ban[]; pagination: Pagination }>> {
    return Quranara.get("/users/ban", {
        query,
    });
}
