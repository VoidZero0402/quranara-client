"use client";

import Link from "next/link";
import { useSuspenseQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import { ROLES } from "@/constants/roles";

import { OpacityAnimation } from "@/libs/motions";

import UserAccount from "./UserAccount";

import Button from "@/components/ui/Button";
import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

import ArrowLogin from "@/components/svgs/ArrowLogin";
import Setting from "@/components/svgs/Setting";

import { CookieUser } from "@/types/user.types";

async function fetchCookieUser(): Promise<{ value: CookieUser | undefined }> {
    const response = await fetch("/api/cookies?key=_user");
    return await response.json();
}

function Account() {
    const {
        data: { value: user },
    } = useSuspenseQuery({ queryKey: ["cookie-user"], queryFn: fetchCookieUser });

    if (!user) {
        return (
            <motion.div {...OpacityAnimation}>
                <Link href="/login">
                    <Button rounded="lg" className="size-12 sm:h-12 sm:w-40 font-pelak-medium">
                        <ArrowLogin className="w-7" strokeWidth={1.5} />
                        <span className="hidden sm:inline-block"> ورود | ثبت نام</span>
                    </Button>
                </Link>
            </motion.div>
        );
    }

    return (
        <>
            {user.role === ROLES.MANAGER ? (
                <motion.div {...OpacityAnimation}>
                    <Link href="/manager-panel">
                        <Button rounded="lg" variant="neutral-base" className="size-12 sm:h-12 sm:w-40 font-pelak-medium">
                            <Setting className="w-6" strokeWidth={1.5} />
                            <span className="hidden sm:inline-block">پنل مدیریت</span>
                        </Button>
                    </Link>
                </motion.div>
            ) : (
                <UserAccount user={user} />
            )}
        </>
    );
}

export function AccountLoading() {
    return (
        <Skeleton className="size-12 sm:h-12 sm:w-40 rounded-2xl">
            <SkeletonFrame className="size-full"></SkeletonFrame>
        </Skeleton>
    );
}

export default Account;
