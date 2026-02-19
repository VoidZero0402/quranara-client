export const STATUS = {
    PAYING: "PAYING",
    SUCCESSFUL: "SUCCESSFUL",
    FAILED: "FAILED",
} as const;

export const StatusText = {
    [STATUS.FAILED]: "پرداخت ناموفق",
    [STATUS.PAYING]: "در حال پرداخت",
    [STATUS.SUCCESSFUL]: "پرداخت موفق",
} as const;
