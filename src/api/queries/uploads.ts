import Quranara from "../clients/Quranara";
import { GetPreSignedUrlQuerySchemaType } from "@/validators/uploads";
import { convertToQueryString } from "@/libs/funcs";

export function getPreSignedURL(query: GetPreSignedUrlQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/uploads/pre-signed-url?${queryString}`;

    return Quranara.get(url);
}
