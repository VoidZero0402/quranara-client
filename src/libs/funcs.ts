import { UploadFileType } from "@/constants/uploads";

export function convertToQueryString(params: Record<string, any | string[]>) {
    const searchParams = new URLSearchParams();

    for (const key in params) {
        if (Array.isArray(params[key])) {
            params[key] = params[key].join(",");
        }

        searchParams.set(key, params[key]);
    }

    return searchParams.toString();
}

export function updateURLSearchParams(route: string, key: string, value: string) {
    const url = new URL(route, window.location.origin);

    url.searchParams.set(key, value);

    return url.toString();
}

export const persianToEnglish = (value: string) => {
    const persian = "۰۱۲۳۴۵۶۷۸۹";
    const english = "0123456789";

    return value.replace(/[\u06F0-\u06F9]/g, (char) => {
        const index = persian.indexOf(char);
        return index !== -1 ? english[index] : char;
    });
};

const UploadPrefixes: Record<string, UploadFileType> = {
    image: "IMAGE",
    audio: "AUDIO",
    application: "ZIP",
};

export function getUploadType(type: string): UploadFileType {
    const prefix = type.slice(0, type.indexOf("/"));
    return UploadPrefixes[prefix];
}
