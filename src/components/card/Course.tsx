import Link from "next/link";

import { StatusText } from "@/constants/courses";

import { getDiscountedPrice } from "@/libs/funcs";

import Image from "../ui/Image";
import Slice from "../ui/Slice";
import Skeleton, { SkeletonFrame } from "../ui/Skeleton";

import UserRounded from "../svgs/UserRounded";
import Star from "../svgs/Star";
import LongArrowLeft from "../svgs/LongArrowLeft";

import { LimitedCourse } from "@/types/course.types";

function Course({ title, description, slug, cover, status, price, discount, metadata }: LimitedCourse) {
    return (
        <div className="bg-white dark:bg-gray-850 rounded-2xl overflow-hidden">
            <Link href={`/courses/${slug}`} className="overflow-hidden">
                <div className="aspect-video">
                    <Image src={cover} alt={title} width={640} height={360} wrapperClassName="rounded-xl" />
                </div>
            </Link>
            <div className="flex flex-col gap-2 p-4">
                <div className="flex items-center gap-x-1 font-pelak-medium text-xs text-teal-500">
                    <span className="block size-1.5 bg-teal-500 rounded-full">
                        <span className="block size-full bg-teal-500 rounded-full animate-ping"></span>
                    </span>
                    {StatusText[status]}
                </div>
                <h3 className="font-pelak-semibold text-gray-800 dark:text-gray-200 line-clamp-1">
                    <Link href={`/courses/${slug}`}>{title}</Link>
                </h3>
                <p className="h-21 text-sm text-gray-600 dark:text-gray-400 leading-7 line-clamp-3">{description}</p>
                <div className="flex items-center justify-between mt-6">
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
                    <div className="relative">
                        {!!discount && (
                            <div className="absolute -top-5 left-0 w-max flex items-center gap-x-2 font-pelak-medium text-xs">
                                <div className="text-amber-400">{discount}٪ تخفیف</div>
                                <del className="text-gray-600 dark:text-gray-400">{price.toLocaleString()}</del>
                            </div>
                        )}
                        {discount === 100 || price === 0 ? (
                            <span className="font-pelak-semibold text-xl text-teal-500">رایگان!</span>
                        ) : (
                            <div className="flex items-center gap-x-1">
                                <span className="font-pelak-semibold text-xl text-gray-700 dark:text-gray-300">{getDiscountedPrice(price, discount)}</span>
                                <span className="f text-xs text-gray-600 dark:text-gray-400">تومان</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Slice className="mx-4 dark:bg-gray-800" />
            <div className="p-4">
                <Link href={`/courses/${slug}`} className="flex items-center gap-x-2 w-max m-auto font-pelak-medium text-gray-600 dark:text-gray-400 hover:text-amber-400 dark:hover:text-amber-400 transition-colors">
                    مشاهده جزئیات دوره
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
                <SkeletonFrame className="h-6 w-3/4"></SkeletonFrame>
                <div className="space-y-2">
                    <SkeletonFrame className="h-5"></SkeletonFrame>
                    <SkeletonFrame className="h-5"></SkeletonFrame>
                    <SkeletonFrame className="h-5 w-3/4"></SkeletonFrame>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <div className="flex gap-x-2 w-1/2">
                        <SkeletonFrame className="w-1/2 h-6.5"></SkeletonFrame>
                        <SkeletonFrame className="w-1/2 h-6.5"></SkeletonFrame>
                    </div>
                    <SkeletonFrame className="w-1/3 h-7"></SkeletonFrame>
                </div>
            </div>
            <Slice className="mx-4 dark:bg-gray-800" />
            <div className="p-4">
                <SkeletonFrame className="h-6 w-44 m-auto"></SkeletonFrame>
            </div>
        </Skeleton>
    );
}

export default Course;
