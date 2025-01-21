import Quranara from "../clients/Quranara";

import { courses } from "../cache/tags";

import { GetAllCoursesQuerySchemaType, SearchCoursesQuerySchameType } from "@/validators/courses";
import { PaginationQuerySchemaType } from "@/validators/pagination";

import { Response, Pagination } from "@/types/response.types";
import { Course, LimitedCourse, SummaryCourse } from "@/types/course.types";
import { Topic } from "@/types/topic.types";
import { Comment } from "@/types/comment.types";

type CoursesQueriesWithSlugParams = { slug: string };
type CoursesQueriesWithIdParams = { courseId: string };

export function getLastCourses(): Promise<Response<{ courses: LimitedCourse[]; pagination: Pagination }>> {
    return Quranara.get("/courses", {
        query: { page: 1, limit: 8 },
        cache: "force-cache",
        next: {
            tags: [courses.default],
            revalidate: 86400,
        },
    });
}

export function getCourses(query: GetAllCoursesQuerySchemaType): Promise<Response<{ courses: LimitedCourse[]; pagination: Pagination }>> {
    return Quranara.get("/courses", {
        query,
    });
}

export function getAllCourses(query: GetAllCoursesQuerySchemaType): Promise<Response<{ courses: LimitedCourse[]; pagination: Pagination }>> {
    return Quranara.get("/courses/all", {
        query,
    });
}

export function getCoursesSummary(): Promise<Response<{ courses: SummaryCourse[]; pagination: Pagination }>> {
    return Quranara.get("/courses/summary");
}

export function searchInCourses(query: SearchCoursesQuerySchameType): Promise<Response<{ courses: LimitedCourse[]; pagination: Pagination }>> {
    return Quranara.get("/courses/search", {
        query,
    });
}

export function getCourse(params: CoursesQueriesWithSlugParams): Promise<Response<{ course: Course }>> {
    const url = `/courses/${params.slug}`;

    return Quranara.get(url, {
        cache: "force-cache",
        next: {
            tags: [courses.getOne(params.slug)],
            revalidate: 86400,
        },
    });
}

export function getRawCourse(params: CoursesQueriesWithIdParams): Promise<Response<{ course: Course }>> {
    const url = `/courses/${params.courseId}/raw`;

    return Quranara.get(url);
}

export function getCourseComments(params: CoursesQueriesWithSlugParams, query: PaginationQuerySchemaType): Promise<Response<{ comments: Comment[]; pagination: Pagination }>> {
    const url = `/courses/${params.slug}/comments`;

    return Quranara.get(url, {
        query,
    });
}

export function getCourseTopics(params: CoursesQueriesWithSlugParams): Promise<Response<{ topics: Topic[] }>> {
    const url = `/courses/${params.slug}/topics`;

    return Quranara.get(url, {
        cache: "force-cache",
        next: {
            tags: [courses.getTopics(params.slug)],
            revalidate: 86400,
        },
    });
}

export function checkAccess(params: CoursesQueriesWithIdParams, cookie?: string): Promise<Response<{ hasAccess: boolean }>> {
    const url = `/courses/${params.courseId}/check-access`;

    return Quranara.get(url, {
        headers: { ...(cookie && { cookie }) },
    });
}
