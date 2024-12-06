"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useToggle } from "usehooks-ts";

import { cn } from "@/libs/cn";

import Logout from "@/components/specific/panel/sidebar/Logout";
import NavLink from "@/components/specific/panel/sidebar/NavLink";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";

import Bag from "@/components/svgs/Bag";
import Bookmark from "@/components/svgs/Bookmark";
import ChatRoundLine from "@/components/svgs/ChatRoundLine";
import HamburgerMenu from "@/components/svgs/HamburgerMenu";
import Heart from "@/components/svgs/Heart";
import HomeAngle from "@/components/svgs/HomeAngle";
import Layers from "@/components/svgs/Layers";
import QuestionCircle from "@/components/svgs/QuestionCircle";
import UserRounded from "@/components/svgs/UserRounded";
import XMark from "@/components/svgs/XMark";

function Sidebar() {
    const [isOpen, toggleOpen] = useToggle();
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            toggleOpen();
        }
    }, [pathname]);

    return (
        <>
            <Button size="circle" variant="neutral-base" className="size-12 lg:hidden" onClick={toggleOpen}>
                <HamburgerMenu className="w-8" />
            </Button>
            <div className={cn("fixed inset-0 lg:hidden w-full h-screen bg-backdrop invisible opacity-0 transition-all duration-300", isOpen && "visible opacity-100")} onClick={toggleOpen}></div>
            <aside className={cn("flex flex-col gap-8 fixed top-0 bottom-0 -right-72 lg:right-0 w-72 h-screen p-4 bg-white dark:bg-gray-850 shadow-xl shadow-gray-100 dark:shadow-none transition-all duration-300 z-20", isOpen && "right-0")}>
                <div className="flex lg:hidden gap-x-4 justify-end">
                    <Link href="/">
                        <Button variant="neutral-base" className="h-12">
                            برو به صفحه اصلی
                        </Button>
                    </Link>
                    <Button size="circle" variant="neutral-base" className="size-12" onClick={toggleOpen}>
                        <XMark />
                    </Button>
                </div>
                <div className="flex gap-x-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <div className="relative">
                        <Avatar className="size-14 rounded-full" />
                        <div className="absolute left-1 bottom-1 size-2 bg-teal-500 rounded-full">
                            <div className="size-full bg-teal-500 rounded-full animate-ping"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <span className="font-pelak-medium text-gray-800 dark:text-gray-200">محمدحسن خانی</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">09393159173</span>
                    </div>
                </div>
                <div className="flex flex-col justify-between grow">
                    <div className="flex flex-col gap-y-2">
                        <NavLink href="/panel">
                            <HomeAngle />
                            پنل کاربری
                        </NavLink>
                        <NavLink href="/panel/cart">
                            <Bag />
                            سبد خرید دوره‌ها
                        </NavLink>
                        <NavLink href="/panel/courses">
                            <Layers />
                            دوره‌های من
                        </NavLink>
                        <NavLink href="/panel/tickets">
                            <ChatRoundLine />
                            تیکت‌های من
                        </NavLink>
                        <NavLink href="/panel/questions">
                            <QuestionCircle />
                            سوالات من
                        </NavLink>
                        <NavLink href="/panel/likes">
                            <Heart />
                            پسندیده ها
                        </NavLink>
                        <NavLink href="/panel/saves">
                            <Bookmark />
                            ذخیره ها
                        </NavLink>
                        <NavLink href="/panel/account">
                            <UserRounded />
                            جزئیات حساب کاربری
                        </NavLink>
                    </div>
                    <Logout />
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
