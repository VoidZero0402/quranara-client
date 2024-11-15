import Quranara from "../clients/Quranara";
import { UpdateAccountSchemaType, ChangePasswordSchemaType } from "@/validators/me";

export function updateAccount(data: UpdateAccountSchemaType) {
    return Quranara.put("/me/update-account", {
        body: JSON.stringify(data),
    });
}

export function changePassword(data: ChangePasswordSchemaType) {
    return Quranara.patch("/me/change-password", {
        body: JSON.stringify(data),
    });
}
