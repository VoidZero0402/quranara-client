export const ROLES = {
    USER: "USER",
    ADMIN: "ADMIN",
    MANAGER: "MANAGER",
} as const;

export const RolesText = {
    [ROLES.USER]: "کاربر",
    [ROLES.ADMIN]: "ادمین",
    [ROLES.MANAGER]: "مدیریت",
};
