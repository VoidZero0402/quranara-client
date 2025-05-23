import { SORTING, STATUS } from "@/constants/courses";

import { PopulatedUser } from "./user.types";

type Status = (typeof STATUS)[keyof typeof STATUS];

type CourseMetadata = {
    students: number;
    rating: number;
    support: string;
    preRequisite: string;
    present: string;
    hours: number;
};

export type Course = {
    _id: string;
    title: string;
    slug: string;
    description: string;
    cover: string;
    price: number;
    status: Status;
    discount: number;
    teacher: PopulatedUser;
    shown: boolean;
    time: [number, number];
    progress: number;
    introduction: {
        video: string;
        content: string;
    };
    metadata: CourseMetadata;
    createdAt: Date;
    updatedAt: Date;
};

export type LimitedCourse = Omit<Course, "introduction">;

export type RelatedCourse = Pick<Course, "_id" | "title" | "slug" | "description" | "status" | "metadata">;

export type SummaryCourse = Pick<Course, "_id" | "title" | "slug">;

export type CourseIdentifiers = Pick<Course, "_id" | "slug">

export type Sorting = (typeof SORTING)[keyof typeof SORTING];
