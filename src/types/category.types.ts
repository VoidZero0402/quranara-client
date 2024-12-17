import { REFERENCES } from "@/constants/categories";

type Ref = (typeof REFERENCES)[keyof typeof REFERENCES];

export type Category = {
    _id: string;
    title: string;
    caption: string;
    ref: Ref;
};

export type PopulatedCategory = Pick<Category, "_id" | "title">;

export type SummaryCategory = Pick<Category, "_id" | "title">

export type Refrences = (typeof REFERENCES)[keyof typeof REFERENCES];
