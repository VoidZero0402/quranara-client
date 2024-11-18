import Link from "next/link";
import { motion } from "framer-motion";

import useToggle from "@/hooks/useToggle";

import { OpacityAnimation } from "@/libs/motions";

import Button from "@/components/ui/Button";
import Dropdown, { DropdownHeader, DropdownSlice, DropdownBody, DropdownFooter } from "@/components/ui/Dropdown";
import Badge from "@/components/ui/Badge";
import Avatar from "@/components/ui/Avatar";

import UserRounded from "@/components/svgs/UserRounded";
import HomeAngle from "@/components/svgs/HomeAngle";
import Bag from "@/components/svgs/Bag";
import Folder from "@/components/svgs/Folder";
import ChatRoundLine from "@/components/svgs/ChatRoundLine";
import QuestionSquare from "@/components/svgs/QuestionSquare";
import Logout from "@/components/svgs/Logout";

import { CookieUser } from "@/types/user.types";

type UserAccountProps = { user: CookieUser };

function UserAccount({ user }: UserAccountProps) {
    const { ref, isOpen, toggleOpen } = useToggle();

    return (
        <div ref={ref} className="flex items-center relative">
            <motion.div {...OpacityAnimation}>
                <Button onClick={toggleOpen} rounded="lg" variant="neutral-base" className="w-40 h-12 font-pelak-medium">
                    حساب کاربری
                    <UserRounded className="w-6" strokeWidth={1.5} />
                </Button>
            </motion.div>

            <Dropdown className={`absolute left-0 top-full w-72 dark:bg-gray-850 transition-all ${isOpen ? "visible opacity-100 mt-4" : "invisible opacity-0 mt-6"}`}>
                <DropdownHeader className="flex items-center gap-x-4 p-2">
                    <Avatar src={user.profile} className="size-16 shrink-0" />
                    <div className="flex flex-col gap-y-2 transform-gpu">
                        <span className="font-pelak-medium text-md text-gray-800 dark:text-gray-200 line-clamp-1">{user.username}</span>
                        <div className="flex items-center gap-x-2">
                            <span className="text-sm text-gray-600 dark:text-gray-400">{user.phone}</span>
                            <Badge>کاربر قرآن‌آرا</Badge>
                        </div>
                    </div>
                </DropdownHeader>
                <DropdownSlice />
                <DropdownBody>
                    <Link href="#" className="flex items-center gap-x-2 py-2.5 px-3 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                        <HomeAngle className="w-6" />
                        پنل کاربری
                    </Link>
                    <Link href="#" className="flex items-center gap-x-2 py-2.5 px-3 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                        <Bag className="w-6" />
                        سبد خرید دوره‌ها
                    </Link>
                    <Link href="#" className="flex items-center gap-x-2 py-2.5 px-3 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                        <Folder className="w-6" />
                        دوره‌های من
                    </Link>
                    <Link href="#" className="flex items-center gap-x-2 py-2.5 px-3 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                        <ChatRoundLine className="w-6" />
                        تیکت‌های من
                    </Link>
                    <Link href="#" className="flex items-center gap-x-2 py-2.5 px-3 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                        <QuestionSquare className="w-6" />
                        سوالات من
                    </Link>
                    <Link href="#" className="flex items-center gap-x-2 py-2.5 px-3 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                        <UserRounded className="w-6" />
                        جزئیات حساب کاربری
                    </Link>
                </DropdownBody>
                <DropdownSlice />
                <DropdownFooter>
                    <button className="flex items-center gap-x-2 w-full py-2.5 px-3 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 cursor-pointer transition-colors">
                        <Logout className="w-6" />
                        خروج از حساب
                    </button>
                </DropdownFooter>
            </Dropdown>
        </div>
    );
}

export default UserAccount;
