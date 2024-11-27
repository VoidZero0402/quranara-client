"use client";

import { useCallback, startTransition } from "react";
import { useToggle } from "usehooks-ts";

import { SORTING } from "@/constants/courses";

import DrawerItem from "./DrawerItem";

import Drawer, { DrawerBody, DrawerHeader } from "@/components/ui/Drawer";

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

type NavigationDrawerProps = { entity: string; sort: string; onChange: (sort: string) => void };

function NavigationDrawer({ entity, sort, onChange }: NavigationDrawerProps) {
    const [isOpen, toggleOpen] = useToggle();

    const handleChangeSort = useCallback(
        (sort: string) => () => {
            startTransition(() => {
                onChange(sort);
                toggleOpen();
            });
        },
        [sort, onChange]
    );

    return (
        <>
            <div className="flex items-center justify-between md:hidden p-4 w-full bg-white dark:bg-gray-850 rounded-2xl select-none" onClick={toggleOpen}>
                <span className="flex items-center gap-x-1 font-pelak-medium text-gray-600 dark:text-gray-400">
                    <SortLines className="w-8" />
                    مرتب‌سازی {entity}
                </span>
                <span className="font-pelak-medium text-gray-800 dark:text-gray-200">{sorting[sort]}</span>
            </div>
            <Drawer isOpen={isOpen} onClose={toggleOpen}>
                <DrawerHeader>
                    <span className="flex items-center gap-x-1 font-pelak-medium text-gray-800 dark:text-gray-200">
                        <SortLines />
                        مرتب‌سازی {entity}
                    </span>
                </DrawerHeader>
                <DrawerBody>
                    <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800">
                        <DrawerItem isActive={sort === SORTING.DEFAULT} handleChange={handleChangeSort(SORTING.DEFAULT)}>
                            <Sort />
                            پیش فرض
                        </DrawerItem>
                        <DrawerItem isActive={sort === SORTING.NEWSET} handleChange={handleChangeSort(SORTING.NEWSET)}>
                            <SortUp />
                            جدید ترین
                        </DrawerItem>
                        <DrawerItem isActive={sort === SORTING.OLDEST} handleChange={handleChangeSort(SORTING.OLDEST)}>
                            <SortDown />
                            قدیمی ترین
                        </DrawerItem>
                        <DrawerItem isActive={sort === SORTING.POPULAR} handleChange={handleChangeSort(SORTING.POPULAR)}>
                            <MedalRibbon />
                            محبوب ترین
                        </DrawerItem>
                    </div>
                </DrawerBody>
            </Drawer>
        </>
    );
}

export default NavigationDrawer;
