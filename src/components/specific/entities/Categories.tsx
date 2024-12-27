"use client";

import { useState, useCallback, startTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSuspenseQuery } from "@tanstack/react-query";

import { getCategories } from "@/api/queries/categories";

import { updateURLSearchParams } from "@/libs/funcs";

import CategoriesDrawer from "./CategoriesDrawer";
import Category from "./Category";

import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

import { Refrences } from "@/types/category.types";
import Tabs, { TabsItem } from "@/components/ui/Tabs";

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
            <div className="hidden md:block">
                <Tabs defaultValue={category} onChangeTab={updateCategory} className="flex flex-wrap gap-4">
                    <TabsItem value="all" unactiveTabClassName="bg-gray-100 dark:bg-gray-500/10 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500/15" activeTabClassName="blue-light dark:amber-light">
                        همه دسته‌بندی‌ها
                    </TabsItem>
                    {data.data.categories.map((item) => (
                        <TabsItem key={item._id} value={item._id} unactiveTabClassName="bg-gray-100 dark:bg-gray-500/10 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500/15" activeTabClassName="blue-light dark:amber-light">
                            {item.title}
                        </TabsItem>
                    ))}
                </Tabs>
            </div>
            <CategoriesDrawer categories={data.data.categories} category={category} onChange={updateCategory} />
        </>
    );
}

export function CategoriesLoading() {
    return (
        <>
            <div className="hidden md:block">
                <div className="flex flex-wrap gap-4">
                    <Skeleton className="size-max">
                        <SkeletonFrame className="h-12 w-32 rounded-xl"></SkeletonFrame>
                    </Skeleton>
                    <Skeleton className="size-max">
                        <SkeletonFrame className="h-12 w-32 rounded-xl"></SkeletonFrame>
                    </Skeleton>
                    <Skeleton className="size-max">
                        <SkeletonFrame className="h-12 w-32 rounded-xl"></SkeletonFrame>
                    </Skeleton>
                    <Skeleton className="size-max">
                        <SkeletonFrame className="h-12 w-32 rounded-xl"></SkeletonFrame>
                    </Skeleton>
                    <Skeleton className="size-max">
                        <SkeletonFrame className="h-12 w-32 rounded-xl"></SkeletonFrame>
                    </Skeleton>
                    <Skeleton className="size-max">
                        <SkeletonFrame className="h-12 w-32 rounded-xl"></SkeletonFrame>
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
