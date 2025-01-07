"use client";

import Link from "next/link";
import { useSuspenseQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import { ROLES } from "@/constants/roles";

import { OpacityAnimation } from "@/libs/motions";
import { getCookieUser } from "@/libs/apis";

import UserAccount from "./UserAccount";

import Button from "@/components/ui/Button";
import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

import UserRounded from "@/components/svgs/UserRounded";
import Setting from "@/components/svgs/Setting";

function Account() {
    const { data: user } = useSuspenseQuery({ queryKey: ["cookie-user"], queryFn: getCookieUser });

    if (!user) {
        return (
            <motion.div {...OpacityAnimation}>
                <Link href="/login">
                    <Button className="size-12 sm:h-12 sm:w-40">
                        <UserRounded className="w-7" />
                        <span className="hidden sm:inline-block">ورود | ثبت نام</span>
                    </Button>
                </Link>
            </motion.div>
        );
    }

    return (
        <>
            {user.role === ROLES.MANAGER ? (
                <motion.div {...OpacityAnimation}>
                    <Link href="/management-panel">
                        <Button variant="neutral-base" className="size-12 sm:h-12 sm:w-40">
                            <Setting className="w-7" />
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
