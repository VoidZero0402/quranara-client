"use client";

import { useState, useCallback, startTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSuspenseQuery } from "@tanstack/react-query";

import { getCategories } from "@/api/queries/categories";

import { updateURLSearchParams } from "@/libs/funcs";

import CategoriesDrawer from "./CategoriesDrawer";

import Button from "@/components/ui/Button";
import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

import { Refrences } from "@/types/category.types";

type CategoriesProps = { reference: Refrences };

function Categories({ reference }: CategoriesProps) {
    const { data } = useSuspenseQuery({
        queryKey: [`${reference}-categories`],
        queryFn: async () => await getCategories({ page: 1, limit: 10, ref: reference }),
    });

    const router = useRouter();
    const searchParams = useSearchParams();

    const [category, setCategory] = useState(searchParams.get("category") ?? "all");

    const updateCategory = useCallback((category: string) => {
        const updatedParams = updateURLSearchParams("category", category);

        startTransition(() => {
            setCategory(category);
        });

        router.push(updatedParams, { scroll: false });
    }, []);

    return (
        <>
            <div className="hidden md:flex items-center gap-x-4">
                <span className="shrink-0 hidden xl:block font-pelak-medium text-lg text-gray-800 dark:text-gray-200">دسته‌بندی مقالات</span>
                <div className="flex flex-wrap gap-4">
                    <Button variant={category === "all" ? "neutral-secondary" : "neutral-base"} onClick={() => updateCategory("all")}>
                        همه دسته‌بندی‌ها
                    </Button>
                    {data.data.categories.map((item) => (
                        <Button key={item._id} variant={category === item._id ? "neutral-secondary" : "neutral-base"} onClick={() => updateCategory(item._id)}>
                            {item.title}
                        </Button>
                    ))}
                </div>
            </div>
            <CategoriesDrawer categories={data.data.categories} category={category} onChange={updateCategory} />
        </>
    );
}

export function CategoriesLoading() {
    return (
        <>
            <div className="hidden md:flex items-center gap-x-4">
                <span className="shrink-0 hidden xl:block font-pelak-medium text-lg text-gray-800 dark:text-gray-200">دسته‌بندی مقالات</span>
                <div className="flex flex-wrap gap-4">
                    <Skeleton className="size-max">
                        <SkeletonFrame className="h-11 w-32 rounded-2xl"></SkeletonFrame>
                    </Skeleton>
                    <Skeleton className="size-max">
                        <SkeletonFrame className="h-11 w-32 rounded-2xl"></SkeletonFrame>
                    </Skeleton>
                    <Skeleton className="size-max">
                        <SkeletonFrame className="h-11 w-32 rounded-2xl"></SkeletonFrame>
                    </Skeleton>
                    <Skeleton className="size-max">
                        <SkeletonFrame className="h-11 w-32 rounded-2xl"></SkeletonFrame>
                    </Skeleton>
                    <Skeleton className="size-max">
                        <SkeletonFrame className="h-11 w-32 rounded-2xl"></SkeletonFrame>
                    </Skeleton>
                    <Skeleton className="size-max">
                        <SkeletonFrame className="h-11 w-32 rounded-2xl"></SkeletonFrame>
                    </Skeleton>
                </div>
            </div>
            <div className="h-16 md:hidden">
                <Skeleton>
                    <SkeletonFrame className="rounded-2xl"></SkeletonFrame>
                </Skeleton>
            </div>
        </>
    );
}

export default Categories;
