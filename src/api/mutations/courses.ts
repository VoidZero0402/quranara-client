import Quranara from "../clients/Quranara";
import { CreateCourseSchemaType, UpdateCourseSchemaType, UpdateCourseOrderSchemaType, DiscountAllSchemaType } from "@/validators/courses";

type CoursesMutationsWithIdParams = { courseId: string };

export function createCourse(data: CreateCourseSchemaType) {
    return Quranara.post("/courses", {
        body: JSON.stringify(data),
    });
}

export function updateCourse(params: CoursesMutationsWithIdParams, data: UpdateCourseSchemaType) {
    const url = `/courses/${params.courseId}`;

    return Quranara.post(url, {
        body: JSON.stringify(data),
    });
}

export function shownCourse(params: CoursesMutationsWithIdParams) {
    const url = `/courses/${params.courseId}/shown`;

    return Quranara.patch(url);
}

export function unshownCourse(params: CoursesMutationsWithIdParams) {
    const url = `/courses/${params.courseId}/unshown`;

    return Quranara.patch(url);
}

export function updateCourseOrder(params: CoursesMutationsWithIdParams, data: UpdateCourseOrderSchemaType) {
    const url = `/courses/${params.courseId}/order`;

    return Quranara.patch(url, {
        body: JSON.stringify(data),
    });
}

export function applyDiscountAll(data: DiscountAllSchemaType) {
    return Quranara.patch("/courses/all/discount/apply", {
        body: JSON.stringify(data),
    });
}

export function removeDiscountAll() {
    return Quranara.patch("/courses/all/discount/remove");
}
