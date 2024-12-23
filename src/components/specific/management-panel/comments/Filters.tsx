"use client";

import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

const FilterCommentsModal = dynamic(() => import("@/components/modal/management-panel/comments/FilterCommentsModal"), { ssr: false });

import Button from "@/components/ui/Button";

import Filter from "@/components/svgs/Filter";

function Filters() {
    const { isOpen, close, open } = useToggleState();

    return (
        <>
            <Button size="lg" variant="neutral-base" onClick={open}>
                <Filter />
                فیلتر نظرات
            </Button>
            <FilterCommentsModal isOpen={isOpen} onClose={close} />
        </>
    );
}

export default Filters;
