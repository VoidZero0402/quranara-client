"use client";

import { useRouter } from "next/navigation";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";

import { checkAccess } from "@/api/queries/courses";
import { addToCart } from "@/api/mutations/cart";
import { AddToCartStatusOptions } from "@/api/errors/cart";

import { statusHandler } from "@/libs/responses";

import Button from "@/components/ui/Button";
import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

import UserRounded from "@/components/svgs/UserRounded";
import AcademicCap from "@/components/svgs/AcademicCap";

type RegisterProps = { _id: string };

function Register({ _id }: RegisterProps) {
    const router = useRouter();

    const {
        data: { data },
    } = useSuspenseQuery({ queryKey: [`check-course-access-${_id}`], queryFn: () => checkAccess({ courseId: _id }) });

    const { mutate: register, isPending } = useMutation({
        mutationKey: [`register-course-${_id}`],
        mutationFn: () => addToCart({ course: _id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, AddToCartStatusOptions);

                if (data.status === 200) {
                    router.push("/panel/cart");
                }
            }
        },
    });

    return (
        <div className="w-full sm:w-1/2">
            {data.hasAccess ? (
                <div className="flex items-center justify-center gap-x-1 w-full h-14 font-pelak-medium blue-light dark:amber-light rounded-2xl">
                    <UserRounded />
                    شما دانشجوی دوره هستید
                </div>
            ) : (
                <Button size="lg" className="w-full h-14" disabled={isPending} onClick={register as any}>
                    <AcademicCap />
                    ثبت‌نام و دسترسی به دوره
                </Button>
            )}
        </div>
    );
}

export function RegisterLoading() {
    return (
        <Skeleton className="w-1/2">
            <SkeletonFrame className="w-full h-14 rounded-2xl"></SkeletonFrame>
        </Skeleton>
    );
}

export default Register;
