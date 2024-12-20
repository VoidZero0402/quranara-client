"use client";

import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

const CreateGlobalNotificationModal = dynamic(() => import("@/components/modal/management-panel/notifications/CreateGlobalNotificationModal"), { ssr: false });

import Button from "@/components/ui/Button";

import LinkCircle from "@/components/svgs/LinkCircle";

function CreateNew() {
    const { isOpen, close, open } = useToggleState();

    return (
        <>
            <Button size="lg" className="w-full sm:w-max" onClick={open}>
                <LinkCircle />
                ایجاد اعلان همگانی
            </Button>
            <CreateGlobalNotificationModal isOpen={isOpen} onClose={close} />
        </>
    );
}

export default CreateNew;
