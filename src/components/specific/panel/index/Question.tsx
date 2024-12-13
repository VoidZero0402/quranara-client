import Link from "next/link";

import { formatDate } from "@/libs/funcs";

import Status from "@/components/ui/Status";

import { LimitedQuestion } from "@/types/question.types";
import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

function Question({ title, session, createdAt, status }: LimitedQuestion) {
    return (
        <Link href={`/sessions/${session.slug}#question`} className="block space-y-4 p-4 bg-gray-50 dark:bg-gray-800 font-pelak-medium rounded-xl">
            <span className="text-sm sm:text-base leading-7 sm:line-clamp-1">{title}</span>
            <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{formatDate(new Date(createdAt))}</span>
                <Status status={status} />
            </div>
        </Link>
    );
}

export function QuestionLoading() {
    return (
        <Skeleton>
            <div className="block space-y-4 p-4">
                <SkeletonFrame className="w-3/4 h-6"></SkeletonFrame>
                <div className="flex items-center justify-between">
                    <SkeletonFrame className="w-1/4 h-6"></SkeletonFrame>
                    <SkeletonFrame className="w-32 h-10"></SkeletonFrame>
                </div>
            </div>
        </Skeleton>
    );
}

export default Question;
