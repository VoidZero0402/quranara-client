"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useMutation } from "@tanstack/react-query";

import { courses as coursesCache } from "@/api/cache/tags";
import { shownCourse, unshownCourse } from "@/api/mutations/courses";
import { ShownCourseStatusOptions, UnshownCourseStatusOptions } from "@/api/errors/courses";

import { revalidate } from "@/libs/revalidate";
import { statusHandler } from "@/libs/responses";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";

import CourseRow from "@/components/specific/management-panel/datatable-rows/CourseRow";

const CreateCommentModal = dynamic(() => import("@/components/modal/management-panel/courses/CreateCommentModal"), { ssr: false });

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

import { LimitedCourse, CourseIdentifiers } from "@/types/course.types";
import { Pagination } from "@/types/response.types";

type CoursesDataTableProps = {
    courses: LimitedCourse[];
    pagination: Pagination;
};

function CoursesDataTable({ courses, pagination }: CoursesDataTableProps) {
    const router = useRouter();

    const { mutate: shown } = useMutation({
        mutationFn: (course: CourseIdentifiers) => shownCourse({ courseId: course._id }),
        onSettled(data, _, variables) {
            if (data) {
                statusHandler(data, ShownCourseStatusOptions);

                if (data.success) {
                    revalidate(coursesCache.default, coursesCache.getOne(variables.slug));
                    router.refresh();
                }
            }
        },
    });

    const { mutate: unshown } = useMutation({
        mutationFn: (course: CourseIdentifiers) => unshownCourse({ courseId: course._id }),
        onSettled(data, _, variables) {
            if (data) {
                statusHandler(data, UnshownCourseStatusOptions);

                if (data.success) {
                    revalidate(coursesCache.default, coursesCache.getOne(variables.slug));
                    router.refresh();
                }
            }
        },
    });

    const { isOpen: isOpenCommentModal, open: openCommentModal, close: closeCommentModal, props: commentModalProps } = useToggleState<{ course: CourseIdentifiers }>();

    const onComment = useCallback((course: CourseIdentifiers) => {
        openCommentModal({ course });
    }, []);

    return (
        <section>
            <DataTable entity={ENTITIES.COURSES} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {courses.map((course) => (
                        <CourseRow key={course._id} course={course} onComment={onComment} onShown={shown} onUnshown={unshown} />
                    ))}
                </DataTableBody>
            </DataTable>
            <CreateCommentModal isOpen={isOpenCommentModal} onClose={closeCommentModal} {...commentModalProps} />
        </section>
    );
}

export default CoursesDataTable;
