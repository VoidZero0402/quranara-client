import getCookie from "@/actions/getCookie";

import { courses as coursesCache } from "@/api/cache/tags";

import { revalidate } from "./revalidate";

import { CookieUser } from "@/types/user.types";
import { getCoursesSummary } from "@/api/queries/courses";

export async function getCookieUser(): Promise<CookieUser | null> {
    const { value } = await getCookie("_user");

    return value ?? null;
}

export async function revalidateCoursesCache() {
    const { data } = await getCoursesSummary();

    const tags = [coursesCache.default, ...data.courses.map((course) => coursesCache.getOne(course.slug))];

    await revalidate(...tags);
}
