import Quranara from "../clients/Quranara";

import { GET_ALL_COURSES } from "@/constants/requestTags";

import { GetAllCoursesQuerySchemaType, SearchCoursesQuerySchameType } from "@/validators/courses";
import { PaginationQuerySchemaType } from "@/validators/pagination";

import { convertToQueryString } from "@/libs/funcs";

import { Pagination, Response } from "@/types/response.types";
import { LimitedCourse } from "@/types/course.types";

type CoursesQueriesWithIdParams = { courseId: string };
type CoursesQueriesWithSlugParams = { slug: string };

export function getAllCourses(query: Partial<GetAllCoursesQuerySchemaType> = {}): Promise<Response<{ courses: LimitedCourse[]; pagination: Pagination }>> {
    const queryString = convertToQueryString(query);
    const url = `/courses?${queryString}`;

    return Quranara.get(url, {
        cache: "force-cache",
        next: {
            tags: [GET_ALL_COURSES],
        },
    });
}

export function searchInCourses(query: SearchCoursesQuerySchameType) {
    const queryString = convertToQueryString(query);
    const url = `/courses/search?${queryString}`;

    return Quranara.get(url);
}

export function getCourse(params: CoursesQueriesWithSlugParams) {
    const url = `/courses/${params.slug}`;

    return Quranara.get(url);
}

export function getCourseComments(params: CoursesQueriesWithSlugParams, query: PaginationQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/courses/${params.slug}/comments?${queryString}`;

    return Quranara.get(url);
}

export function getCourseTopics(params: CoursesQueriesWithIdParams) {
    const url = `/courses/${params.courseId}/topics`;

    return Quranara.get(url);
}
