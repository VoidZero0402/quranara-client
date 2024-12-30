"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { courses as coursesCache } from "@/api/cache/tags";
import { shownCourse, unshownCourse } from "@/api/mutations/courses";
import { ShownCourseStatusOptions, UnshownCourseStatusOptions } from "@/api/errors/courses";

import { revalidate } from "@/libs/revalidate";
import { statusHandler } from "@/libs/responses";

import { ENTITIES } from "@/constants/entities";

import CourseRow from "@/components/specific/management-panel/datatable-rows/CourseRow";

import DataTable, { DataTableBody, Column } from "@/components/ui/datatable/DataTable";

const columns: Column[] = [
    {
        key: "title",
        text: "عنوان",
    },
    {
        key: "status",
        text: "وضعیت دوره",
    },
    {
        key: "shown",
        text: "وضعیت نمایش",
    },
    {
        key: "price",
        text: "قیمت دوره",
    },
    {
        key: "updatedAt",
        text: "آخرین بروزرسانی",
    },
    {
        key: "actions",
        text: "گزینه‌های پیشرفته",
    },
];

import { LimitedCourse, LimitedCourseCourseIdentifiers } from "@/types/course.types";
import { Pagination } from "@/types/response.types";

type CoursesDataTableProps = {
    courses: LimitedCourse[];
    pagination: Pagination;
};

function CoursesDataTable({ courses, pagination }: CoursesDataTableProps) {
    const router = useRouter();

    const { mutate: shown } = useMutation({
        mutationFn: (course: LimitedCourseCourseIdentifiers) => shownCourse({ courseId: course._id }),
        async onSettled(data, _, variables) {
            if (data) {
                statusHandler(data, ShownCourseStatusOptions);

                if (data.success) {
                    await revalidate(coursesCache.default, coursesCache.getOne(variables.slug));
                    router.refresh();
                }
            }
        },
    });

    const { mutate: unshown } = useMutation({
        mutationFn: (course: LimitedCourseCourseIdentifiers) => unshownCourse({ courseId: course._id }),
        async onSettled(data, _, variables) {
            if (data) {
                statusHandler(data, UnshownCourseStatusOptions);

                if (data.success) {
                    await revalidate(coursesCache.default, coursesCache.getOne(variables.slug));
                    router.refresh();
                }
            }
        },
    });

    return (
        <section>
            <DataTable entity={ENTITIES.COURSES} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {courses.map((course) => (
                        <CourseRow key={course._id} course={course} onShown={shown} onUnshown={unshown} />
                    ))}
                </DataTableBody>
            </DataTable>
        </section>
    );
}

export default CoursesDataTable;
