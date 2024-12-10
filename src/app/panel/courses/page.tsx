import { Suspense } from "react";

import CoursesGrid, { CoursesGridLoading } from "@/components/layout/panel/courses/CoursesGrid";

import Layers from "@/components/svgs/Layers";

function Courses() {
    return (
        <div className="space-y-8 py-8 px-4 sm:p-8">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <Layers className="w-8" />
                    دوره‌های من
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">دوره‌هایی که میخوای باهاشون مسیرتو هموار کنی!</p>
            </div>
            <Suspense fallback={<CoursesGridLoading />}>
                <CoursesGrid />
            </Suspense>
        </div>
    );
}

export default Courses;
