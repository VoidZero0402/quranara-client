"use client";

import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

const FilterQuestionsModal = dynamic(() => import("@/components/modal/management-panel/questions/FilterQuestionsModal"), { ssr: false });

import Button from "@/components/ui/Button";

import Filter from "@/components/svgs/Filter";

function Filters() {
    const { isOpen, close, open } = useToggleState();

    return (
        <>
            <Button size="lg" variant="neutral-base" onClick={open}>
                <Filter />
                فیلتر پرسش‌ها
            </Button>
            <FilterQuestionsModal isOpen={isOpen} onClose={close} />
        </>
    );
}

export default Filters;
