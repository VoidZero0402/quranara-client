import { cookies } from "next/headers";
import Link from "next/link";

import { getMyLastCourses } from "@/api/queries/me";

import Course, { CourseLoading } from "@/components/card/panel/Course";

import Button from "@/components/ui/Button";

import LinkCircle from "@/components/svgs/LinkCircle";

async function CoursesGrid() {
    const { data } = await getMyLastCourses((await cookies()).toString());

    return (
        <>
            {!!data.courses.length ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 min-[1480px]:grid-cols-4 gap-8">
                    {data.courses.map((course) => (
                        <Course key={course._id} {...course} />
                    ))}
                </div>
            ) : (
                <EmptyState />
            )}
        </>
    );
}

function EmptyState() {
    return (
        <div className="flex-center flex-col gap-4">
            <div className="space-y-2 text-center">
                <span className="font-pelak-medium text-xl text-gray-800 dark:text-gray-200 leading-8">هنوز توی هیچ دوره‌ای شرکت نکردی</span>
                <p className="text-gray-600 dark:text-gray-400 leading-7">اگه دوست داری به جمع دانشجویان قرآن‌آرا بپیوندی، حالا شروع کن!</p>
            </div>
            <Link href="/courses">
                <Button size="lg">
                    <LinkCircle />
                    مشاهده دوره‌های قرآن‌آرا
                </Button>
            </Link>
        </div>
    );
}

export function CoursesGridLoading() {
    return (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 min-[1480px]:grid-cols-4 gap-8">
            <CourseLoading />
            <CourseLoading />
            <CourseLoading />
            <CourseLoading />
        </div>
    );
}

export default CoursesGrid;
