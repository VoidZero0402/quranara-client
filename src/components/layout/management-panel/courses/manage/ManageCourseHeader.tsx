import Link from "next/link";

import CreateNewTopic from "@/components/specific/management-panel/courses/manage/CreateNewTopic";

import Button from "@/components/ui/Button";

import Layers from "@/components/svgs/Layers";
import LongArrowLeft from "@/components/svgs/LongArrowLeft";
import { Course } from "@/types/course.types";

type ManageCourseHeaderProps = { course: Pick<Course, "_id" | "title" | "slug"> };

function ManageCourseHeader({ course }: ManageCourseHeaderProps) {
    return (
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 p-4 sm:p-0">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <Layers className="w-8" />
                    مدیریت سرفصل‌ها و جلسات دوره
                </span>
                <p className="font-pelak-medium text-sm text-amber-400 underline leading-7">دوره {course.title}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <CreateNewTopic course={{ _id: course._id, slug: course.slug }} />
                <Link href="/management-panel/courses">
                    <Button size="lg" variant="neutral-base" className="w-full sm:w-max">
                        بازگشت به دوره‌ها
                        <LongArrowLeft />
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default ManageCourseHeader;
