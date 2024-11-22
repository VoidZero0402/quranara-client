import Quranara from "../clients/Quranara";

import { GetPreSignedUrlQuerySchemaType } from "@/validators/uploads";

import { convertToQueryString } from "@/libs/funcs";

import { Response } from "@/types/response.types";

export function getPreSignedURL(query: GetPreSignedUrlQuerySchemaType): Promise<Response<{ url: string }>> {
    const queryString = convertToQueryString(query);
    const url = `/uploads/pre-signed-url?${queryString}`;

    return Quranara.get(url);
}
