import { getMe } from "@/api/queries/auth";

import { courses as coursesCache } from "@/api/cache/tags";

import { revalidate } from "./revalidate";

import { User } from "@/types/user.types";
import { getCoursesSummary } from "@/api/queries/courses";

export async function getUser(): Promise<User | null> {
    const res = await getMe();

    return res.data.user ?? null;
}

export async function revalidateCoursesCache() {
    const { data } = await getCoursesSummary();

    const tags = [coursesCache.default, ...data.courses.map((course) => coursesCache.getOne(course.slug))];

    await revalidate(...tags);
}
