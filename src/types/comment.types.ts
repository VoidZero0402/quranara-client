import { STATUS, SOURCE, REPLIES_STATUS } from "@/constants/comments";

import { PopulatedUser } from "./user.types";
import { Course } from "./course.types";
import { Blog } from "./blog.types";
import { Tv } from "./tv.types";

type Status = (typeof STATUS)[keyof typeof STATUS];
type ReplyStatus = (typeof REPLIES_STATUS)[keyof typeof REPLIES_STATUS];
export type Source = (typeof SOURCE)[keyof typeof SOURCE];
export type FieldSource = "course" | "blog" | "tv";

export type Reply = {
    _id: string;
    content: string;
    user: PopulatedUser;
    status: Status;
    createdAt: number;
};

export type Comment = {
    _id: string;
    content: string;
    user: PopulatedUser;
    pin: boolean;
    status: Status;
    replies: Reply[];
    _replies: Reply[];
    course?: Pick<Course, "_id" | "title">;
    blog?: Pick<Blog, "_id" | "title">;
    tv?: Pick<Tv, "_id" | "title">;
    repliesStatus: ReplyStatus;
    createdAt: number;
};
