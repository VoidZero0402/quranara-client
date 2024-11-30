import { SORTING, STATUS } from "@/constants/blog";

import { PopulatedUser } from "./user.types";
import { PopulatedCategory } from "./category.types";
import { RelatedCourse } from "./course.types";

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
    relatedCourses: RelatedCourse[];
    updatedAt: Date;
};

export type LimitedBlog = Omit<Blog, "content" | "headings" | "status" | "tags" | "relatedCourses">;

export type Sorting = (typeof SORTING)[keyof typeof SORTING];
