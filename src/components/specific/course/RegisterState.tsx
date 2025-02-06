"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { checkAccess } from "@/api/queries/courses";

import Register from "./Register";

import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

import UserRounded from "@/components/svgs/UserRounded";

type RegisterProps = { _id: string };

function RegisterState({ _id }: RegisterProps) {
    const {
        data: { data },
    } = useSuspenseQuery({ queryKey: ["check-course-access", { _id }], queryFn: () => checkAccess({ courseId: _id }) });

    return (
        <div className="w-full sm:w-1/2">
            {data.hasAccess ? (
                <div className="flex items-center justify-center gap-x-1 w-full h-14 font-pelak-medium blue-light dark:teal-light rounded-2xl">
                    <UserRounded />
                    شما دانشجوی دوره هستید
                </div>
            ) : (
                <Register _id={_id} />
            )}
        </div>
    );
}

export function RegisterStateLoading() {
    return (
        <Skeleton className="w-1/2">
            <SkeletonFrame className="w-full h-14 rounded-2xl"></SkeletonFrame>
        </Skeleton>
    );
}

export default RegisterState;
