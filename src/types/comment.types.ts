import { PopulatedUser } from "./user.types";

export type Reply = {
    _id: string;
    content: string;
    user: PopulatedUser;
    createdAt: Date;
};

export type Comment = {
    _id: string;
    content: string;
    user: PopulatedUser;
    pin: boolean;
    replies: Reply[];
    createdAt: Date;
};
