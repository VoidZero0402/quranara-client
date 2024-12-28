import Quranara from "../clients/Quranara";

import { GetPreSignedUrlQuerySchemaType } from "@/validators/uploads";

import { Response } from "@/types/response.types";

export function getPreSignedURL(query: GetPreSignedUrlQuerySchemaType): Promise<Response<{ url: string; filename: string }>> {
    return Quranara.get("/uploads/pre-signed-url", {
        query,
    });
}
