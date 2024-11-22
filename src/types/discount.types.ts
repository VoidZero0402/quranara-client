import { PopulatedUser } from "./user.types";

export type Discount = {
    code: string;
    percent: number;
    course?: string;
    creator: PopulatedUser;
    max: number;
    uses: number;
    expireAt: Date;
};
