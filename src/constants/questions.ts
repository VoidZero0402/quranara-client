export const STATUS = {
    ACTIVE: "ACTIVE",
    SLEEP: "SLEEP",
    COLSED: "COLSED",
} as const;

export const FILTER__STATUSES = Object.keys(STATUS);

export const StatusText = {
    [STATUS.ACTIVE]: "پرسش فعال",
    [STATUS.SLEEP]: "پرسش در خواب ",
    [STATUS.COLSED]: "پرسش بسته شده",
};