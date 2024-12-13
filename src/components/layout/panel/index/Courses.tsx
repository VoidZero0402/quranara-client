import { Suspense } from "react";
import Link from "next/link";

import CoursesGrid, { CoursesGridLoading } from "@/components/specific/panel/index/CoursesGrid";

import Button from "@/components/ui/Button";

import Layers from "@/components/svgs/Layers";
import LongArrowLeft from "@/components/svgs/LongArrowLeft";

function Courses() {
    return (
        <section className="space-y-8 w-full p-8 bg-white dark:bg-gray-850 rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col items-center sm:items-start gap-y-2">
                    <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                        <Layers className="w-8" />
                        دوره‌های من
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">آخرین دوره‌هایی که توشون ثبت‌نام کردی</p>
                </div>
                <Link href="/panel/courses">
                    <Button size="lg" variant="text-primary">
                        مشاهده همه دوره‌های من
                        <LongArrowLeft />
                    </Button>
                </Link>
            </div>
            <Suspense fallback={<CoursesGridLoading />}>
                <CoursesGrid />
            </Suspense>
        </section>
    );
}

export default Courses;
