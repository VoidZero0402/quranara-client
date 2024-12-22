"use client";

import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

const GlobalDiscountModal = dynamic(() => import("@/components/modal/management-panel/discounts/GlobalDiscountModal"), { ssr: false });

import Button from "@/components/ui/Button";

import Discount from "@/components/svgs/Discount";

function GlobalDiscount() {
    const { isOpen, close, open } = useToggleState();

    return (
        <>
            <Button size="lg" variant="neutral-base" onClick={open}>
                <Discount />
                اعمال تخفیف همگانی
            </Button>
            <GlobalDiscountModal isOpen={isOpen} onClose={close} />
        </>
    );
}

export default GlobalDiscount;
