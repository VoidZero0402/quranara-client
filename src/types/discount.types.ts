import { PopulatedUser } from "./user.types";

export type Discount = {
    _id: string;
    code: string;
    percent: number;
    course?: string;
    creator: PopulatedUser;
    max: number;
    uses: number;
    expireAt: number;
    createdAt: number
};
