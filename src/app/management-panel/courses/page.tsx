import { getAllCourses } from "@/api/queries/courses";

import { ENTITIES } from "@/constants/entities";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import CoursesHeader from "@/components/layout/management-panel/courses/CoursesHeader";
import CoursesDataTable from "@/components/layout/management-panel/courses/CoursesDataTable";

async function Courses({ searchParams }: { searchParams: Promise<{ page: string }> }) {
    const { page = 1 } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.COURSES);

    const { data } = await getAllCourses({ page: +page, limit, sort: "newest" });

    return (
        <div className="space-y-4">
            <CoursesHeader />
            <CoursesDataTable courses={data.courses} pagination={data.pagination} />
        </div>
    );
}

export default Courses;
