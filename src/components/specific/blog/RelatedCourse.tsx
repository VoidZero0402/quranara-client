import Link from "next/link";

import { StatusText } from "@/constants/courses";

import UserRounded from "@/components/svgs/UserRounded";
import Star from "@/components/svgs/Star";

import { RelatedCourse as RelatedCourseType } from "@/types/course.types";

function RelatedCourse({ title, slug, description, status, metadata }: RelatedCourseType) {
    return (
        <Link href={`/courses/${slug}`} className="group flex flex-col gap-y-4 relative p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="space-y-2">
                <span className="font-pelak-semibold text-sm text-gray-800 dark:text-gray-200 group-hover:text-amber-400 transition-all line-clamp-1">{title}</span>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-6 line-clamp-2">{description}</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-x-2">
                    <div className="flex items-center gap-x-1 py-1 px-2 font-pelak-medium text-sm blue-light rounded-lg">
                        <UserRounded className="w-4" />
                        <span className="h-4.5">{metadata.students}</span>
                    </div>
                    <div className="flex items-center gap-x-1 py-1 px-2 font-pelak-medium text-sm amber-light rounded-lg">
                        <Star className="w-4" />
                        <span className="h-4.5">{metadata.rating}</span>
                    </div>
                </div>
                <span className="py-1 px-2 h-6.5 font-pelak-medium text-xs gray-light rounded-lg">{StatusText[status]}</span>
            </div>
        </Link>
    );
}

export default RelatedCourse;
