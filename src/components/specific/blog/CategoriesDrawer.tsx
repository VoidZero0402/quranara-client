"use client";

import { useCallback, startTransition } from "react";
import { useToggle } from "usehooks-ts";

import DrawerItem from "../entities/DrawerItem";

import Drawer, { DrawerBody, DrawerHeader } from "@/components/ui/Drawer";

import Transform from "@/components/svgs/Transform";

import { Category } from "@/types/category.types";

type CategoriesDrawerProps = { categories: Category[]; category: string; onChange: (category: string) => void };

function CategoriesDrawer({ categories, category, onChange }: CategoriesDrawerProps) {
    const [isOpen, toggleOpen] = useToggle();

    const handleChangeCategory = useCallback(
        (category: string) => () => {
            startTransition(() => {
                onChange(category);
                toggleOpen();
            });
        },
        [category, onChange]
    );

    const text = category === "all" ? "همه دسته‌بندی‌ها" : (categories.find((item) => item._id === category) as Category).title;

    return (
        <>
            <div className="flex items-center justify-between md:hidden p-4 w-full bg-white dark:bg-gray-850 rounded-2xl select-none" onClick={toggleOpen}>
                <span className="flex items-center gap-x-1 font-pelak-medium text-gray-600 dark:text-gray-400">
                    <Transform className="w-8" />
                    دسته بندی مقالات
                </span>
                <span className="font-pelak-medium text-gray-800 dark:text-gray-200">{text}</span>
            </div>
            <Drawer isOpen={isOpen} onClose={toggleOpen}>
                <DrawerHeader>
                    <span className="flex items-center gap-x-1 font-pelak-medium text-gray-800 dark:text-gray-200">
                        <Transform />
                        دسته بندی مقالات
                    </span>
                </DrawerHeader>
                <DrawerBody>
                    <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800">
                        <DrawerItem isActive={category === "all"} handleChange={handleChangeCategory("all")}>
                            همه دسته‌بندی‌ها
                        </DrawerItem>
                        {categories.map((item) => (
                            <DrawerItem key={item._id} isActive={category === item._id} handleChange={handleChangeCategory(item._id)}>
                                {item.title}
                            </DrawerItem>
                        ))}
                    </div>
                </DrawerBody>
            </Drawer>
        </>
    );
}

export default CategoriesDrawer;
