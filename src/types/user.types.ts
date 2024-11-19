import { ROLES } from "@/constants/comments";

type Role = (typeof ROLES)[keyof typeof ROLES];

export type User = {
    _id: string;
    phone: string;
    email: string;
    fullname: string;
    username: string;
    role: Role;
    profile?: string;
};

export type CookieUser = Omit<User, "_id">;

export type LimitedUser = Pick<User, "_id" | "username" | "profile">;
