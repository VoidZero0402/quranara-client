import Quranara from "../clients/Quranara";
import { GetAllCoursesQuerySchemaType, SearchCoursesQuerySchameType } from "@/validators/courses";
import { PaginationQuerySchemaType } from "@/validators/pagination";
import { convertToQueryString } from "@/libs/funcs";

type CoursesQueriesWithIdParams = { courseId: string };
type CoursesQueriesWithSlugParams = { slug: string };

export function getAllCourses(query: GetAllCoursesQuerySchemaType) {
    const queryString = convertToQueryString(query);
    const url = `/courses?${queryString}`;

    return Quranara.get(url);
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
