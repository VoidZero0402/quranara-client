"use client";

import { useCallback, startTransition } from "react";
import { useToggle } from "usehooks-ts";

import { SORTING } from "@/constants/courses";

import Drawer, { DrawerBody, DrawerHeader } from "@/components/ui/Drawer";

import CheckCircle from "@/components/svgs/CheckCircle";
import MedalRibbon from "@/components/svgs/MedalRibbon";
import Sort from "@/components/svgs/Sort";
import SortDown from "@/components/svgs/SortDown";
import SortLines from "@/components/svgs/SortLines";
import SortUp from "@/components/svgs/SortUp";

const sorting: Record<string, string> = {
    [SORTING.DEFAULT]: "پیش فرض",
    [SORTING.NEWSET]: "جدید ترین",
    [SORTING.OLDEST]: "قدیمی ترین",
    [SORTING.POPULAR]: "محبوب ترین",
};

type NavigationDrawerProps = { sort: string; onChange: (sort: string) => void };

type NavigationDrawerItemProps = { isActive: boolean; handleChange: () => void } & React.ComponentProps<"div">;

function NavigationDrawer({ sort, onChange }: NavigationDrawerProps) {
    const [isOpen, toggleOpen] = useToggle();

    const handleChangeSort = useCallback(
        (sort: string) => () => {
            startTransition(() => {
                onChange(sort);
                toggleOpen();
            });
        },
        [sort]
    );

    return (
        <>
            <div className="flex items-center justify-between md:hidden p-4 w-full bg-white dark:bg-gray-850 rounded-2xl select-none" onClick={toggleOpen}>
                <span className="flex items-center gap-x-1 font-pelak-medium text-gray-600 dark:text-gray-400">
                    <SortLines className="w-8" />
                    مرتب‌سازی دوره‌ها
                </span>
                <span className="font-pelak-medium text-gray-800 dark:text-gray-200">{sorting[sort]}</span>
            </div>
            <Drawer isOpen={isOpen} onClose={toggleOpen}>
                <DrawerHeader>
                    <span className="flex items-center gap-x-1 font-pelak-medium text-gray-800 dark:text-gray-200">
                        <SortLines />
                        مرتب‌سازی دوره‌ها
                    </span>
                </DrawerHeader>
                <DrawerBody>
                    <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800">
                        <NavigationDrawerItem isActive={sort === SORTING.DEFAULT} handleChange={handleChangeSort(SORTING.DEFAULT)}>
                            <Sort />
                            پیش فرض
                        </NavigationDrawerItem>
                        <NavigationDrawerItem isActive={sort === SORTING.NEWSET} handleChange={handleChangeSort(SORTING.NEWSET)}>
                            <SortUp />
                            جدید ترین
                        </NavigationDrawerItem>
                        <NavigationDrawerItem isActive={sort === SORTING.OLDEST} handleChange={handleChangeSort(SORTING.OLDEST)}>
                            <SortDown />
                            قدیمی ترین
                        </NavigationDrawerItem>
                        <NavigationDrawerItem isActive={sort === SORTING.POPULAR} handleChange={handleChangeSort(SORTING.POPULAR)}>
                            <MedalRibbon />
                            محبوب ترین
                        </NavigationDrawerItem>
                    </div>
                </DrawerBody>
            </Drawer>
        </>
    );
}

function NavigationDrawerItem({ children, isActive, handleChange }: NavigationDrawerItemProps) {
    return (
        <div className={`flex items-center justify-between p-4 font-pelak-medium select-none transition-colors duration-300 ${isActive ? "text-blue-500 dark:text-amber-400" : "text-gray-800 dark:text-gray-200"}`} onClick={handleChange}>
            <div className="flex items-center gap-x-1">{children}</div>
            {isActive && <CheckCircle className="w-6 text-blue-500 dark:text-amber-400" />}
        </div>
    );
}

export default NavigationDrawer;
