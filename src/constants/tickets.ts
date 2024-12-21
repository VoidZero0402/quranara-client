export const STATUS = {
    ACTIVE: "ACTIVE",
    SLEEP: "SLEEP",
    COLSED: "COLSED",
} as const;

export const TYPE = {
    SUPPORT: "SUPPORT",
    MANAGEMENT: "MANAGEMENT",
} as const;

export const FILTER__STATUSES = Object.keys(STATUS);

export const StatusText = {
    [STATUS.ACTIVE]: "تیکت فعال",
    [STATUS.SLEEP]: "تیکت در انتظار ",
    [STATUS.COLSED]: "تیکت بسته شده",
};

export const TypeText = {
    [TYPE.SUPPORT]: "پشتبانی",
    [TYPE.MANAGEMENT]: "مدیریت",
};
