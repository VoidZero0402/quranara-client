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

export function getTruthyValues(obj: Record<string, any>): Record<string, any> {
    const record: Record<string, any> = {};

    for (const prop in obj) {
        if (obj[prop]) {
            record[prop] = obj[prop];
        }
    }

    return record;
}

export function calculatePaginationPages(pagesCount: number, current: number, limit = 6): { start: number[]; end: number[]; hasSeparator: boolean } {
    if (limit >= pagesCount) {
        const start = new Array(pagesCount).fill(0).map((_, i) => i + 1);

        return { start, end: [], hasSeparator: false };
    }

    if (limit >= pagesCount - current) {
        const end = new Array(limit / 2).fill(0).map((_, i) =>  i + 1);
        const start = [1, 2, 3];

        return { start, end, hasSeparator: true };
    }

    const start = [current, current + 1, current + 2];
    const end = [pagesCount - 2, pagesCount - 1, pagesCount];

    return { start, end, hasSeparator: true };
}
