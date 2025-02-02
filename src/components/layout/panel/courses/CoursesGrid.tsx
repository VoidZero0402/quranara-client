import { cookies } from "next/headers";

import { getMyCourses } from "@/api/queries/me";

import Course, { CourseLoading } from "@/components/card/panel/Course";

async function CoursesGrid() {
    const { data } = await getMyCourses((await cookies()).toString());

    return <section className="grid sm:grid-cols-2 xl:grid-cols-3 min-[1480px]:grid-cols-4 gap-8">{!!data.courses.length ? data.courses.map((course) => <Course key={course._id} {...course} />) : <EmptyState />}</section>;
}

function EmptyState() {
    return (
        <div className="flex-center col-span-4 py-10">
            <span className="font-pelak-medium text-center sm:text-lg text-gray-600 dark:text-gray-400 leading-8 sm:leading-8">هنوز توی دوره‌ای ثبت‌نام نکردی</span>
        </div>
    );
}

export function CoursesGridLoading() {
    return (
        <section className="grid sm:grid-cols-2 xl:grid-cols-3 min-[1480px]:grid-cols-4 gap-8">
            <CourseLoading />
            <CourseLoading />
            <CourseLoading />
            <CourseLoading />
        </section>
    );
}

export default CoursesGrid;
