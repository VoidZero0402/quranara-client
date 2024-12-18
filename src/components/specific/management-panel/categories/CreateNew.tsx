"use client";

import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

const CreateNewCategoryModal = dynamic(() => import("@/components/modal/management-panel/categories/CreateNewCategoryModal"), { ssr: false });

import Button from "@/components/ui/Button";

import LinkCircle from "@/components/svgs/LinkCircle";

function CreateNew() {
    const { isOpen, close, open } = useToggleState();

    return (
        <>
            <Button size="lg" onClick={open}>
                <LinkCircle />
                ایجاد دسته‌بندی جدید
            </Button>
            <CreateNewCategoryModal isOpen={isOpen} onClose={close} />
        </>
    );
}

export default CreateNew;
