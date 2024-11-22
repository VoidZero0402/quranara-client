import { PopulatedUser } from "./user.types";

type Reply = {
    content: string;
    user: PopulatedUser;
};

export type Comment = {
    _id: string;
    content: string;
    user: PopulatedUser;
    pin: boolean;
    replies: Reply[];
};
