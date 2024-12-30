export const STATUS = {
    PRE_SELL: "PRE_SELL",
    ON_PERFORMING: "ON_PERFORMING",
    REACHED: "REACHED",
} as const;

export const SORTING = {
    DEFAULT: "default",
    NEWSET: "newest",
    OLDEST: "oldest",
    POPULAR: "popular",
} as const;

export const StatusText = {
    [STATUS.PRE_SELL]: "در حال پیش فروش",
    [STATUS.ON_PERFORMING]: "در حال برگزاری",
    [STATUS.REACHED]: "تکمیل شده",
} as const;
