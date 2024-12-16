"use client";

import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

const LogoutModal = dynamic(() => import("@/components/modal/LogoutModal"), { ssr: false })

import Button from "@/components/ui/Button";

import LogoutIcon from "@/components/svgs/Logout";

function Logout() {
    const { isOpen, close, open } = useToggleState();

    return (
        <>
            <Button size="lg" rounded="full" variant="neutral-base" onClick={open}>
                <LogoutIcon />
                خروج از حساب کاربری
            </Button>
            <LogoutModal isOpen={isOpen} onClose={close} />
        </>
    );
}

export default Logout;
