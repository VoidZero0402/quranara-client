import Link from "next/link";

import { getAllCourses } from "@/api/queries/courses";

import Course, { CourseLoading } from "@/components/card/Course";

import Button from "@/components/ui/Button";

import Layers from "@/components/svgs/Layers";
import LongArrowLeft from "@/components/svgs/LongArrowLeft";
import Magnifer from "@/components/svgs/Magnifer";

type CoursesProps = { query: string };

async function Courses({ query }: CoursesProps) {
    const { data } = await getAllCourses({ page: 1, limit: 8, sort: "default", search: query });

    return (
        <section className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-0">
                <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-start">
                    <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
                        <Layers className="w-8" />
                        <h2 className="font-pelak-semibold text-2xl">دوره‌های تخصصی قرآن‌آرا</h2>
                    </div>
                    <p className="font-pelak-medium text-gray-500">نتیجه جستجوی &quot;{query}&quot; در دوره‌های تخصصی قرآن‌آرا</p>
                </div>
                <Link href="/courses">
                    <Button size="lg" rounded="lg" variant="text-primary">
                        مشاهده همه دوره‌ها
                        <LongArrowLeft />
                    </Button>
                </Link>
            </div>
            {!!data.courses.length ? (
                <>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {data.courses.map((course) => (
                            <Course key={course._id} {...course} />
                        ))}
                    </div>
                    {data.pagination.pagesCount !== 1 && (
                        <div className="flex-center py-10">
                            <Link href={`/courses?search=${query}`}>
                                <Button size="lg">
                                    <Magnifer />
                                    جستجوی کامل در دوره‌ها
                                </Button>
                            </Link>
                        </div>
                    )}
                </>
            ) : (
                <EmptyState query={query} />
            )}
        </section>
    );
}

function EmptyState({ query }: CoursesProps) {
    return (
        <div className="flex-center col-span-4 py-10">
            <span className="font-pelak-medium text-center text-lg text-gray-600 dark:text-gray-400 leading-8">دوره‌ای در نتیجه جستجو &quot;{query}&quot; پیدا نشد</span>
        </div>
    );
}

export function CoursesLoading({ query }: CoursesProps) {
    return (
        <section className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-0">
                <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-start">
                    <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
                        <Layers className="w-8" />
                        <h2 className="font-pelak-semibold text-2xl">دوره‌های تخصصی قرآن‌آرا</h2>
                    </div>
                    <p className="font-pelak-medium text-gray-500">نتیجه جستجوی &quot;{query}&quot; در دروه‌های تخصصی قرآن‌آرا</p>
                </div>
                <Link href="/courses">
                    <Button size="lg" rounded="lg" variant="text-primary">
                        مشاهده همه دوره‌ها
                        <LongArrowLeft />
                    </Button>
                </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <CourseLoading />
                <CourseLoading />
                <CourseLoading />
                <CourseLoading />
            </div>
        </section>
    );
}

export default Courses;
