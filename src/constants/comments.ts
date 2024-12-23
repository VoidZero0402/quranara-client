export const STATUS = {
    PENDING: "PENDING",
    ACCEPTED: "ACCEPTED",
    REJECTED: "REJECTED",
} as const;

export const SOURCE = {
    BLOG: "BLOG",
    TV: "TV",
    COURSE: "COURSE",
} as const;

export const ROLES = {
    USER: "USER",
    MANAGER: "MANAGER",
} as const;

export const FILTER__STATUSES = Object.keys(STATUS);

export const FILTER__SOURCES = Object.keys(SOURCE);

export const StatusText = {
    [STATUS.ACCEPTED]: "تایید شده",
    [STATUS.PENDING]: "در انتظار",
    [STATUS.REJECTED]: "رد شده",
};

export const SourceText = {
    [SOURCE.COURSE]: "دوره",
    [SOURCE.BLOG]: "مقاله",
    [SOURCE.TV]: "آموزش",
};
