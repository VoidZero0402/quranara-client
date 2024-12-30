import { notFound } from "next/navigation";

import { getRawCourse } from "@/api/queries/courses";

import UpdateCourseHeader from "@/components/layout/management-panel/courses/update/UpdateCourseHeader";
import UpdateCourseForm from "@/components/form/template/management-panel/UpdateCourseForm";

async function UpdateCourse({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const {
        data: { course },
        status,
    } = await getRawCourse({ courseId: id });

    if (status === 404) {
        notFound();
    }

    return (
        <div className="space-y-4">
            <UpdateCourseHeader />
            <div className="py-8 px-4 sm:p-8 bg-white dark:bg-gray-850 sm:rounded-2xl">
                <UpdateCourseForm course={course} />
            </div>
        </div>
    );
}

export default UpdateCourse;
