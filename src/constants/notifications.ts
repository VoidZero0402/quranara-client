export const TYPES = {
    GLOBAL: "GLOBAL",
    COURSE_REGISTERS: "COURSE_REGISTERS",
    ONE_USER: "ONE_USER",
} as const;

export const MODE = {
    READ: "read",
    UNREAD: "unread",
} as const;

export const TypesText = {
    [TYPES.GLOBAL]: "اعلان همگانی",
    [TYPES.COURSE_REGISTERS]: "اعلان اعضای دوره",
    [TYPES.ONE_USER]: "اعلان کاربر",
}