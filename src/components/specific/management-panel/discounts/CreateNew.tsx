"use client";

import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

const CreateDiscountModal = dynamic(() => import("@/components/modal/management-panel/discounts/CreateDiscountModal"), { ssr: false });

import Button from "@/components/ui/Button";

import LinkCircle from "@/components/svgs/LinkCircle";

function CreateNew() {
    const { isOpen, close, open } = useToggleState();

    return (
        <>
            <Button size="lg" onClick={open}>
                <LinkCircle />
                ایجاد کد تخفیف
            </Button>
            <CreateDiscountModal isOpen={isOpen} onClose={close} />
        </>
    );
}

export default CreateNew;
