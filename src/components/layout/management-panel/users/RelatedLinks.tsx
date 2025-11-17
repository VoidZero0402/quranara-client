"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

import useToggleState from "@/hooks/useToggleState";

import Button from "@/components/ui/Button";

const CreareUserModal = dynamic(() => import("@/components/modal/management-panel/users/CreareUserModal"), { ssr: false });

import UserBlockRounded from "@/components/svgs/UserBlockRounded";
import UserRounded from "@/components/svgs/UserRounded";

function RelatedLinks() {
    const { isOpen: isOpenCreateUserModal, open: openCreateUserModal, close: closeCreateUserModal } = useToggleState();

    return (
        <>
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-0">
                <Link href="/management-panel/users/bans" className="w-full sm:w-max">
                    <Button size="lg" className="w-full">
                        <UserBlockRounded />
                        مدیریت کاربران مسدود شده
                    </Button>
                </Link>
                <Button size="lg" variant="neutral-base" className="w-full sm:w-max" onClick={openCreateUserModal}>
                    <UserRounded />
                    اضافه کردن کاربر جدید
                </Button>
            </div>
            <CreareUserModal isOpen={isOpenCreateUserModal} onClose={closeCreateUserModal} />
        </>
    );
}

export default RelatedLinks;
