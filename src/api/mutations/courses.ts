import Quranara from "../clients/Quranara";

import { CreateCourseSchemaType, UpdateCourseSchemaType, UpdateCourseOrderSchemaType, DiscountAllSchemaType } from "@/validators/courses";

import { MessageResponse } from "@/types/response.types";

type CoursesMutationsWithIdParams = { courseId: string };

export function createCourse(data: CreateCourseSchemaType): MessageResponse {
    return Quranara.post("/courses", {
        body: JSON.stringify(data),
    });
}

export function updateCourse(params: CoursesMutationsWithIdParams, data: UpdateCourseSchemaType): MessageResponse {
    const url = `/courses/${params.courseId}`;

    return Quranara.put(url, {
        body: JSON.stringify(data),
    });
}

export function shownCourse(params: CoursesMutationsWithIdParams): MessageResponse {
    const url = `/courses/${params.courseId}/shown`;

    return Quranara.patch(url);
}

export function unshownCourse(params: CoursesMutationsWithIdParams): MessageResponse {
    const url = `/courses/${params.courseId}/unshown`;

    return Quranara.patch(url);
}

export function updateCourseOrder(params: CoursesMutationsWithIdParams, data: UpdateCourseOrderSchemaType): MessageResponse {
    const url = `/courses/${params.courseId}/order`;

    return Quranara.patch(url, {
        body: JSON.stringify(data),
    });
}

export function applyDiscountAll(data: DiscountAllSchemaType): MessageResponse {
    return Quranara.patch("/courses/all/discount/apply", {
        body: JSON.stringify(data),
    });
}

export function removeDiscountAll(): MessageResponse {
    return Quranara.patch("/courses/all/discount/remove");
}
