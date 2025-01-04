import { PopulatedUser } from "./user.types";
import { PopulatedCategory } from "./category.types";

export type Tv = {
    _id: string;
    title: string;
    slug: string;
    description: string;
    publisher: PopulatedUser;
    category: PopulatedCategory;
    cover: string;
    video: string;
    shown: boolean;
    attached?: string;
    content: string;
    views: number;
    likes: number;
    createdAt: number;
    updatedAt: number;
};

export type LimitedTv = Omit<Tv, "video" | "attached" | "content">;

export type TvIdentifiers = Pick<Tv, "_id" | "slug">;
