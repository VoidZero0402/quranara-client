import { UploadFileType } from "@/constants/uploads";
import { SourcePaths } from "@/constants/content";

import { Source } from "@/types/editor.types";
import { TiptapSetImageSchemaType } from "@/validators/editor";

export function updateURLSearchParams(key: string, value: string, route?: string) {
    const url = new URL(route ?? window.location.href, window.location.origin);

    url.searchParams.set(key, value);

    return url.toString();
}

export function updateMultipleURLSearchParams(params: Record<string, string>, route?: string) {
    const url = new URL(route ?? window.location.href, window.location.origin);

    for (const param in params) {
        url.searchParams.set(param, params[param]);
    }

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

export function formateDateObject(data: Date | number): string {
    const localDateString = new Date(data).toLocaleString("fa", { dateStyle: "medium", timeStyle: "short" });
    return localDateString;
}

const formatter = new Intl.DateTimeFormat("fa-IR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    calendar: "persian",
});

export function formatDate(date: Date): string {
    const parts = formatter.formatToParts(new Date(date));

    const indexed: Record<string, string> = {};

    for (const part of parts) {
        indexed[part.type] = part.value;
    }

    return `${indexed.weekday}, ${indexed.day} ${indexed.month} ${indexed.year}`;
}

export function getFullDate(): string {
    return formatDate(new Date());
}

export function getTruthyValues(obj: Record<string, any>, excludes: string[] = []): Record<string, any> {
    const record: Record<string, any> = {};

    for (const prop in obj) {
        if (excludes.includes(prop)) {
            if (obj[prop] !== "") {
                record[prop] = obj[prop];
            }
            continue;
        }

        if (typeof obj[prop] === "object") {
            record[prop] = getTruthyValues(obj[prop]);
            continue;
        }

        if (obj[prop] !== "") {
            record[prop] = obj[prop];
        }
    }

    return record;
}

export function getPagination(pagesCount: number, current: number, limit = 5): { pagination: number[] } {
    const pagination: number[] = [];

    if (limit >= pagesCount) {
        for (let i = 1; i <= pagesCount; i++) {
            pagination.push(i);
        }

        return { pagination };
    }

    const halfLimit = Math.ceil(limit / 2);

    const max = pagesCount - halfLimit + 1;

    const middle = Math.min(Math.max(halfLimit, current), max);

    for (let i = middle - halfLimit + 1; i < middle; i++) {
        pagination.push(i);
    }

    for (let i = middle; i < middle + halfLimit; i++) {
        pagination.push(i);
    }

    return { pagination };
}

export function limitStringLength(str: string, limit: number): string {
    const limited = `${str.slice(0, limit)}${limit < str.length ? "..." : ""}`;
    return limited;
}

export function getDateAfterHours(hours: number): number {
    const milliSeconds = hours * 60 * 60 * 1000;
    const date = Date.now() + milliSeconds;

    return date;
}

export function formatPrice(price: string) {
    const number = Number(price);
    return number ? `${number.toLocaleString()} تومان` : "دوره رایگان!";
}

export function getDiscountedPrice(price: number, discount: number) {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice.toLocaleString();
}

export function updateTiptapImageSrc(source: Source, data: TiptapSetImageSchemaType) {
    const src = `${SourcePaths[source]}/${data.src}`;

    const updatedData = { ...data, src };

    return updatedData;
}
