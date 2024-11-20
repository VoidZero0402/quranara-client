import { STATUS } from "@/constants/courses";

import { PopulatedUser } from "./user.types";

type Status = (typeof STATUS)[keyof typeof STATUS]

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
    discount: string;
    teacher: PopulatedUser;
    introduction: {
        video: string;
        content: string;
    };
    metadata: CourseMetadata;
};

export type LimitedCourse = Omit<Course, "introduction">;
