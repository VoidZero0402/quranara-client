import { getAllCourses } from "@/api/queries/courses";

import { ENTITIES } from "@/constants/entities";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import CoursesHeader from "@/components/layout/management-panel/courses/CoursesHeader";

async function Courses({ searchParams }: { searchParams: Promise<{ page: string }> }) {
    const { page = 1 } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.COURSES);

    const { data } = await getAllCourses({ page: +page, limit, sort: "newest" });

    return (
        <div className="space-y-4">
            <CoursesHeader />
        </div>
    );
}

export default Courses;
