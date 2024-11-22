import Quranara from "../clients/Quranara";

import { courses } from "../cache/tags";

import { GetAllCoursesQuerySchemaType, SearchCoursesQuerySchameType } from "@/validators/courses";
import { PaginationQuerySchemaType } from "@/validators/pagination";

import { convertToQueryString } from "@/libs/funcs";

import { Response, Pagination } from "@/types/response.types";
import { Course, LimitedCourse } from "@/types/course.types";
import { Topic } from "@/types/topic.types";

type CoursesQueriesWithSlugParams = { slug: string };

export function getAllCourses(): Promise<Response<{ courses: LimitedCourse[]; pagination: Pagination }>> {
    return Quranara.get("/courses", {
        cache: "force-cache",
        next: {
            tags: [courses.default],
        },
    });
}

export function getCourses(query: GetAllCoursesQuerySchemaType): Promise<Response<{ courses: LimitedCourse[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/courses?${queryString}`;

    return Quranara.get(url);
}

export function searchInCourses(query: SearchCoursesQuerySchameType): Promise<Response<{ courses: LimitedCourse[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/courses/search?${queryString}`;

    return Quranara.get(url);
}

export function getCourse(params: CoursesQueriesWithSlugParams): Promise<Response<{ course: Course }>> {
    const url = `/courses/${params.slug}`;

    return Quranara.get(url, {
        cache: "force-cache",
        next: {
            tags: [courses.getOne(params.slug)],
        },
    });
}

export function getCourseComments(params: CoursesQueriesWithSlugParams, query: PaginationQuerySchemaType): Promise<Response<{ comments: Comment[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/courses/${params.slug}/comments?${queryString}`;

    return Quranara.get(url, {
        cache: "force-cache",
        next: {
            tags: [courses.getComments(params.slug)],
        },
    });
}

export function getCourseTopics(params: CoursesQueriesWithSlugParams): Promise<Response<{ topics: Topic[] }>> {
    const url = `/courses/${params.slug}/topics`;

    return Quranara.get(url, {
        cache: "force-cache",
        next: {
            tags: [courses.getTopics(params.slug)],
        },
    });
}
