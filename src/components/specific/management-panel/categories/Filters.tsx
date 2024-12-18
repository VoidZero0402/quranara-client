"use client";

import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

const FilterCategoriesModal = dynamic(() => import("@/components/modal/management-panel/categories/FilterCategoriesModal"), { ssr: false });

import Button from "@/components/ui/Button";

import Filter from "@/components/svgs/Filter";

function Filters() {
    const { isOpen, close, open } = useToggleState();

    return (
        <>
            <Button size="lg" variant="neutral-base" onClick={open}>
                <Filter />
                فیلتر دسته‌بندی ها
            </Button>
            <FilterCategoriesModal isOpen={isOpen} onClose={close} />
        </>
    );
}

export default Filters;
