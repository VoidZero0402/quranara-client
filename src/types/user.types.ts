import { ROLES } from "@/constants/comments";

export type Role = (typeof ROLES)[keyof typeof ROLES];

export type User = {
    _id: string;
    phone: string;
    fullname: string;
    username: string;
    role: Role;
    profile?: string;
    age?: number;
    city?: string;
    createdAt: number
};

export type CookieUser = Omit<User, "_id">;

export type PopulatedUser = Pick<User, "_id" | "username" | "profile">;
