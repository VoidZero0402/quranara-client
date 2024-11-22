import Quranara from "../clients/Quranara";

import { CreateUserSchemaType, BanUserSchemaType, UnbanUserSchemaType, SigningCourseSchemaType } from "@/validators/users";

import { MessageResponse } from "@/types/response.types";

export function createUser(data: CreateUserSchemaType): MessageResponse {
    return Quranara.post("/users", {
        body: JSON.stringify(data),
    });
}

export function banUser(data: BanUserSchemaType): MessageResponse {
    return Quranara.post("/users/ban", {
        body: JSON.stringify(data),
    });
}

export function unbanUser(data: UnbanUserSchemaType): MessageResponse {
    return Quranara.post("/users/unban", {
        body: JSON.stringify(data),
    });
}

export function signCourse(data: SigningCourseSchemaType): MessageResponse {
    return Quranara.post("/users/signing-course", {
        body: JSON.stringify(data),
    });
}
