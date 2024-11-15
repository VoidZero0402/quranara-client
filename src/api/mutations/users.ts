import Quranara from "../clients/Quranara";
import { CreateUserSchemaType, BanUserSchemaType, UnbanUserSchemaType, SigningCourseSchemaType } from "@/validators/users";

export function createUser(data: CreateUserSchemaType) {
    return Quranara.post("/users", {
        body: JSON.stringify(data),
    });
}

export function banUser(data: BanUserSchemaType) {
    return Quranara.post("/users/ban", {
        body: JSON.stringify(data),
    });
}

export function unbanUser(data: UnbanUserSchemaType) {
    return Quranara.post("/users/unban", {
        body: JSON.stringify(data),
    });
}

export function signCourse(data: SigningCourseSchemaType) {
    return Quranara.post("/users/signing-course", {
        body: JSON.stringify(data),
    });
}
