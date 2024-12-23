import { STATUS, SOURCE } from "@/constants/comments";

import { PopulatedUser } from "./user.types";
import { Course } from "./course.types";
import { Blog } from "./blog.types";
import { Tv } from "./tv.types";

type Status = (typeof STATUS)[keyof typeof STATUS];
export type Source = (typeof SOURCE)[keyof typeof SOURCE];
export type FieldSource = "course" | "blog" | "tv";

export type Reply = {
    _id: string;
    content: string;
    user: PopulatedUser;
    status: Status;
    createdAt: string;
};

export type Comment = {
    _id: string;
    content: string;
    user: PopulatedUser;
    pin: boolean;
    status: Status;
    replies: Reply[];
    course?: Pick<Course, "_id" | "title">;
    blog?: Pick<Blog, "_id" | "title">;
    tv?: Pick<Tv, "_id" | "title">;
    createdAt: number;
};
