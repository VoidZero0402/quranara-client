"use client";

import { useState, useCallback, startTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { SORTING } from "@/constants/courses";

import { updateURLSearchParams } from "@/libs/funcs";

import NavigationDrawer from "./NavigationDrawer";

import Tabs, { TabsItem } from "@/components/ui/Tabs";
import SearchBar from "@/components/ui/SearchBar";

import MedalRibbon from "@/components/svgs/MedalRibbon";
import Sort from "@/components/svgs/Sort";
import SortLines from "@/components/svgs/SortLines";
import SortUp from "@/components/svgs/SortUp";
import SortDown from "@/components/svgs/SortDown";

type NavigationProps = { entity: string };

function Navigation({ entity }: NavigationProps) {
    const router = useRouter();
    const path = usePathname();
    const searchParams = useSearchParams();

    const [sort, setSort] = useState(searchParams.get("sort") ?? SORTING.DEFAULT);

    const route = `${path}?${searchParams.toString()}`;

    const updateSort = useCallback(
        (sort: string) => {
            const updatedURL = updateURLSearchParams(route, "sort", sort);

            startTransition(() => {
                setSort(sort);
            });

            router.push(updatedURL, { scroll: false });
        },
        [router, route]
    );

    return (
        <div className="flex flex-col-reverse xl:flex-row items-center gap-4 md:gap-8 xl:p-6 xl:bg-white xl:dark:bg-gray-850 rounded-2xl">
            <div className="hidden md:flex flex-col lg:flex-row items-center justify-center xl:justify-normal gap-4 w-full xl:w-3/4 p-6 xl:p-0 bg-white dark:bg-gray-850 rounded-2xl xl:rounded-none">
                <span className="flex items-center gap-x-1 font-pelak-medium text-gray-600 dark:text-gray-400">
                    <SortLines className="w-8" />
                    مرتب‌سازی {entity}
                </span>
                <Tabs defaultValue={sort} onChangeTab={updateSort}>
                    <TabsItem value={SORTING.DEFAULT} className="flex items-center gap-x-1 font-pelak-medium hover:text-blue-500 dark:hover:text-amber-400 rounded-2xl" activeTabClassName="blue-light dark:amber-light">
                        <Sort />
                        پیش فرض
                    </TabsItem>
                    <TabsItem value={SORTING.NEWSET} className="flex items-center gap-x-1 font-pelak-medium hover:text-blue-500 dark:hover:text-amber-400 rounded-2xl" activeTabClassName="blue-light dark:amber-light">
                        <SortUp />
                        جدید ترین
                    </TabsItem>
                    <TabsItem value={SORTING.OLDEST} className="flex items-center gap-x-1 font-pelak-medium hover:text-blue-500 dark:hover:text-amber-400 rounded-2xl" activeTabClassName="blue-light dark:amber-light">
                        <SortDown />
                        قدیمی ترین
                    </TabsItem>
                    <TabsItem value={SORTING.POPULAR} className="flex items-center gap-x-1 font-pelak-medium hover:text-blue-500 dark:hover:text-amber-400 rounded-2xl" activeTabClassName="blue-light dark:amber-light">
                        <MedalRibbon />
                        محبوب ترین
                    </TabsItem>
                </Tabs>
            </div>
            <NavigationDrawer entity={entity} sort={sort} onChange={updateSort} />
            <div className="grow w-full xl:w-min p-4 md:p-6 xl:p-0 bg-white dark:bg-gray-850 rounded-2xl xl:rounded-none">
                <SearchBar route={route} query="search" placeholder={`در ${entity} جستجو کنید`} empty />
            </div>
        </div>
    );
}

export default Navigation;
