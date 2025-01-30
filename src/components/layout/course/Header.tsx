import { Suspense } from "react";

import { StatusText } from "@/constants/courses";

import { getDiscountedPrice } from "@/libs/funcs";

import IntroPlayer from "@/components/specific/course/IntroPlayer";
import RegisterState, { RegisterStateLoading } from "@/components/specific/course/RegisterState";

import Button from "@/components/ui/Button";
import Breadcrumb, { BreadcrumbItem, BreadcrumbSlice } from "@/components/ui/Breadcrumb";

import Layers from "@/components/svgs/Layers";
import Link from "next/link";

import { Course } from "@/types/course.types";

type HeaderProps = Pick<Course, "_id" | "title" | "description" | "price" | "discount" | "status" | "cover"> & { video?: string };

function Header({ _id, title, description, price, discount, status, cover, video }: HeaderProps) {
    return (
        <header className="container">
            <div className="space-y-12">
                <Breadcrumb>
                    <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
                    <BreadcrumbSlice />
                    <BreadcrumbItem href="/courses">دوره‌های تخصصی</BreadcrumbItem>
                    <BreadcrumbSlice />
                    <BreadcrumbItem href="#">{title}</BreadcrumbItem>
                </Breadcrumb>

                <section className="flex items-center flex-col-reverse xl:flex-row gap-8">
                    <div className="xl:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <h1 className="font-pelak-semibold text-xl sm:text-2xl text-gray-800 dark:text-gray-200">{title}</h1>
                            <p className="text-gray-600 dark:text-gray-400 leading-8 xl:line-clamp-4 xl:h-[128px]">{description}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-x-2 font-pelak-medium text-sm sm:text-base text-blue-500">
                                <div className="size-1.5 sm:size-2 bg-blue-500 rounded-full">
                                    <div className="size-full bg-blue-500 rounded-full animate-ping"></div>
                                </div>
                                دوره {StatusText[status]}
                            </div>
                            <div className="flex items-center gap-x-2 font-pelak-medium">
                                {!!discount && (
                                    <div className="p-2 text-sm teal-light rounded-lg">
                                        {discount}٪ <span className="hidden sm:inline">تخفیف</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-x-1 relative">
                                    <span className="font-pelak-semibold text-3xl text-gray-700 dark:text-gray-300">{getDiscountedPrice(price, discount)}</span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">تومان</span>
                                    {!!discount && <del className="absolute -top-6 text-gray-400 dark:text-gray-600">{price.toLocaleString()}</del>}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Suspense fallback={<RegisterStateLoading />}>
                                <RegisterState _id={_id} />
                            </Suspense>
                            <Link href="#topics" className="w-full sm:w-1/2">
                                <Button size="lg" className="w-full h-14" variant="neutral-base">
                                    <Layers />
                                    مشاهده سرفصل‌های دوره
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full xl:w-1/2">
                        <IntroPlayer title={title} cover={cover} video={video} />
                    </div>
                </section>
            </div>
        </header>
    );
}

export default Header;
