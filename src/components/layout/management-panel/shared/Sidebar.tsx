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

import XMark from "@/components/svgs/XMark";
import HamburgerMenu from "@/components/svgs/HamburgerMenu";
import Setting from "@/components/svgs/Setting";
import UserGroup from "@/components/svgs/UserGroup";
import Layers from "@/components/svgs/Layers";
import Widgets from "@/components/svgs/Widgets";
import PlayCircle from "@/components/svgs/PlayCircle";
import Document from "@/components/svgs/Document";
import NotificationUnreadLines from "@/components/svgs/NotificationUnreadLines";
import ChatRoundLine from "@/components/svgs/ChatRoundLine";
import ChatRoundDots from "@/components/svgs/ChatRoundDots";
import QuestionCircle from "@/components/svgs/QuestionCircle";
import Bag from "@/components/svgs/Bag";
import Discount from "@/components/svgs/Discount";
import UserRounded from "@/components/svgs/UserRounded";

import { CookieUser } from "@/types/user.types";

type SidebarProps = { user: CookieUser };

function Sidebar({ user }: SidebarProps) {
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
            <div className={cn("fixed inset-0 lg:hidden w-full h-screen bg-backdrop invisible opacity-0 transition-all duration-300 z-20", isOpen && "visible opacity-100")} onClick={toggleOpen}></div>
            <aside className={cn("flex flex-col gap-8 fixed top-0 bottom-0 -right-72 lg:right-0 w-72 h-screen p-4 bg-white dark:bg-gray-850 shadow-xl shadow-gray-100 dark:shadow-none overflow-auto with-custom-scroll transition-all duration-300 z-20", isOpen && "right-0")}>
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
                        <Avatar src={user.profile} className="size-14 rounded-full" />
                        <div className="absolute left-1 bottom-1 size-2 bg-teal-500 rounded-full">
                            <div className="size-full bg-teal-500 rounded-full animate-ping"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <span className="font-pelak-medium text-gray-800 dark:text-gray-200">{user.username}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">مدیریت قرآن‌آرا</span>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-8 grow">
                    <div className="flex flex-col gap-y-2">
                        <NavLink href="/management-panel">
                            <Setting />
                            پنل مدیریت
                        </NavLink>
                        <NavLink href="/management-panel/users">
                            <UserGroup />
                            مدیریت کاربران
                        </NavLink>
                        <NavLink href="/management-panel/courses">
                            <Layers />
                            دوره‌های تخصصی
                        </NavLink>
                        <NavLink href="/management-panel/blogs">
                            <Widgets />
                            مقالات تخصصی
                        </NavLink>
                        <NavLink href="/management-panel/tvs">
                            <PlayCircle />
                            آموزش‌های رایگان
                        </NavLink>
                        <NavLink href="/management-panel/news">
                            <Document />
                            تازه‌ترین اخبار
                        </NavLink>
                        <NavLink href="/management-panel/notifications">
                            <NotificationUnreadLines />
                            مدیریت اعلانات
                        </NavLink>
                        <NavLink href="/management-panel/tickets">
                            <ChatRoundLine />
                            مدیریت تیکت‌ها
                        </NavLink>
                        <NavLink href="/management-panel/comments">
                            <ChatRoundDots />
                            مدیریت نظرات
                        </NavLink>
                        <NavLink href="/management-panel/questions">
                            <QuestionCircle />
                            پرسش‌های جلسات
                        </NavLink>
                        <NavLink href="/management-panel/orders">
                            <Bag />
                            سفارشات کاربران
                        </NavLink>
                        <NavLink href="/management-panel/discounts">
                            <Discount />
                            مدیریت تخفیفات
                        </NavLink>
                        <NavLink href="/management-panel/account">
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
