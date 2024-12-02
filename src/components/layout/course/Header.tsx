import { Suspense } from "react";

import { StatusText } from "@/constants/courses";

import HeaderPlayer from "@/components/specific/course/HeaderPlayer";
import Register, { RegisterLoading } from "@/components/specific/course/Register";

import Button from "@/components/ui/Button";
import Breadcrumb, { BreadcrumbItem, BreadcrumbSlice } from "@/components/ui/Breadcrumb";

import Layers from "@/components/svgs/Layers";
import Link from "next/link";

import { Course } from "@/types/course.types";

type HeaderProps = Pick<Course, "_id" | "title" | "description" | "price" | "status" | "cover"> & { video?: string };

function Header({ _id, title, description, price, status, cover, video }: HeaderProps) {
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

                <section className="flex flex-col-reverse xl:flex-row gap-8">
                    <div className="xl:w-1/2 space-y-8">
                        <div className="flex items-center gap-x-2 font-pelak-semibold text-blue-500">
                            <div className="size-2 bg-blue-500 rounded-full">
                                <div className="size-2 bg-blue-500 rounded-full animate-ping"></div>
                            </div>
                            دوره {StatusText[status]}
                        </div>
                        <div className="space-y-2">
                            <h1 className="font-pelak-semibold text-2xl text-gray-800 dark:text-gray-200">{title}</h1>
                            <p className="text-gray-600 dark:text-gray-400 leading-7 line-clamp-3 h-[84px]">
                                {description}
                                {description}
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-x-2"></div>
                            <div className="flex gap-x-4">
                                <div className="flex items-center gap-x-1">
                                    <span className="font-pelak-semibold text-3xl text-gray-700 dark:text-gray-300">{price.toLocaleString()}</span>
                                    <span className="font-pelak-medium text-sm text-gray-500">تومان</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Suspense fallback={<RegisterLoading />}>
                                <Register _id={_id} />
                            </Suspense>
                            <Link href="#topics" className="w-full sm:w-1/2">
                                <Button size="lg" className="w-full h-14" variant="neutral-base">
                                    <Layers />
                                    مشاهده سرفصل‌های دوره
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="xl:w-1/2">
                        <HeaderPlayer cover={cover} video={video} />
                    </div>
                </section>
            </div>
        </header>
    );
}

export default Header;
