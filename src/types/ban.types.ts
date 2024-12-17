import { User } from "./user.types";

export type Ban = {
    _id: string;
    phone: string;
    user: User;
    createdAt: number
};
