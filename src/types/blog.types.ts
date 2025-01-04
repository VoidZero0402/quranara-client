import { SORTING } from "@/constants/blog";

import { PopulatedUser } from "./user.types";
import { PopulatedCategory } from "./category.types";
import { RelatedCourse } from "./course.types";

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
    shown: boolean;
    views: number;
    likes: number;
    timeToRead: number;
    relatedCourses: RelatedCourse[];
    updatedAt: Date;
};

export type LimitedBlog = Omit<Blog, "content" | "headings" | "status" | "tags" | "relatedCourses">;

export type BlogIdentifiers = Pick<Blog, "_id" | "slug">

export type Sorting = (typeof SORTING)[keyof typeof SORTING];
