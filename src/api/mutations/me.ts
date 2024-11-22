import Quranara from "../clients/Quranara";

import { UpdateAccountSchemaType, ChangePasswordSchemaType } from "@/validators/me";

import { MessageResponse } from "@/types/response.types";

export function updateAccount(data: UpdateAccountSchemaType): MessageResponse {
    return Quranara.put("/me/update-account", {
        body: JSON.stringify(data),
    });
}

export function changePassword(data: ChangePasswordSchemaType): MessageResponse {
    return Quranara.patch("/me/change-password", {
        body: JSON.stringify(data),
    });
}
