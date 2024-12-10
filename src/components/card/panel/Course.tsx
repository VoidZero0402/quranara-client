import Link from "next/link";

import { StatusText } from "@/constants/courses";

import Placeholder from "@/components/ui/Placeholder";
import Slice from "@/components/ui/Slice";
import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

import LongArrowLeft from "@/components/svgs/LongArrowLeft";
import Play from "@/components/svgs/Play";

import { LimitedCourse } from "@/types/course.types";
import Image from "@/components/ui/Image";

function Course({ title, description, slug, status, price, discount, metadata }: LimitedCourse) {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
            <div>
                <Link href={`/courses/${slug}#topics`} className="relative group">
                    <Placeholder className="aspect-video rounded-xl" />
                    <div className="flex-center absolute inset-0 m-auto size-16 bg-white/10 rounded-full transition-all duration-300 group-hover:size-18">
                        <div className="flex-center size-12 bg-white/10 border border-white/20 rounded-full">
                            <Play className="w-6 text-white" />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col gap-2 p-4">
                <div className="flex items-center gap-x-1 font-pelak-medium text-xs text-blue-500">
                    <span className="block size-1.5 bg-blue-500 rounded-full">
                        <span className="block size-full bg-blue-500 rounded-full animate-ping"></span>
                    </span>
                    {StatusText[status]}
                </div>
                <h3 className="font-pelak-medium text-lg text-gray-800 dark:text-gray-200 line-clamp-1">
                    <Link href={`/courses/${slug}#topics`}>{title}</Link>
                </h3>
                <p className="h-18 text-sm text-gray-600 dark:text-gray-400 leading-6 line-clamp-3">{description}</p>
            </div>
            <Slice className="mx-4" />
            <div className="p-4">
                <Link href={`/courses/${slug}#topics`} className="flex items-center gap-x-2 w-max m-auto font-pelak-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-amber-400 transition-colors">
                    مشاهده جلسات دوره
                    <LongArrowLeft className="w-6" strokeWidth={1.5} />
                </Link>
            </div>
        </div>
    );
}

export function CourseLoading() {
    return (
        <Skeleton className="rounded-2xl">
            <div className="aspect-video">
                <SkeletonFrame className="rounded-xl"></SkeletonFrame>
            </div>
            <div className="flex flex-col gap-2 p-4">
                <SkeletonFrame className="h-4 w-20"></SkeletonFrame>
                <SkeletonFrame className="h-7 w-3/4"></SkeletonFrame>
                <div className="space-y-1.5">
                    <SkeletonFrame className="h-5"></SkeletonFrame>
                    <SkeletonFrame className="h-5"></SkeletonFrame>
                    <SkeletonFrame className="h-5 w-3/4"></SkeletonFrame>
                </div>
            </div>
            <Slice className="mx-4" />
            <div className="p-4">
                <SkeletonFrame className="h-6 w-44 m-auto"></SkeletonFrame>
            </div>
        </Skeleton>
    );
}

export default Course;
