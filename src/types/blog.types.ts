import { STATUS } from "@/constants/blog";

import { PopulatedUser } from "./user.types";
import { PopulatedCategory } from "./category.types";

type Status = (typeof STATUS)[keyof typeof STATUS];

export type Blog = {
    _id: string;
    title: string;
    slug: string;
    description: string;
    cover: string;
    content: string;
    headings: string[];
    author: PopulatedUser;
    category: PopulatedCategory;
    status: Status;
    tags: string[];
    views: number;
    likes: number;
    timeToRead: number;
    relatedCourses: string[];
    updatedAt: Date;
};

export type LimitedBlog = Omit<Blog, "content" | "headings" | "status" | "tags" | "relatedCourses">;
