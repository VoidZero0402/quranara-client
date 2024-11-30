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
    [STATUS.ON_PERFORMING]: "پیش فروش",
    [STATUS.PRE_SELL]: "در حال برگزاری",
    [STATUS.REACHED]: "تکمیل شده",
} as const;
