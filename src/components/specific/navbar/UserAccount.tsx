import Link from "next/link";
import { motion } from "framer-motion";

import useToggle from "@/hooks/useToggle";

import { OpacityAnimation } from "@/libs/motions";

import Button from "@/components/ui/Button";
import Dropdown, { DropdownHeader, DropdownBody, DropdownFooter } from "@/components/ui/Dropdown";
import Badge from "@/components/ui/Badge";
import Avatar from "@/components/ui/Avatar";
import Slice from "@/components/ui/Slice";

import UserRounded from "@/components/svgs/UserRounded";
import HomeAngle from "@/components/svgs/HomeAngle";
import Bag from "@/components/svgs/Bag";
import Folder from "@/components/svgs/Folder";
import ChatRoundLine from "@/components/svgs/ChatRoundLine";
import QuestionCircle from "@/components/svgs/QuestionCircle";
import Logout from "@/components/svgs/Logout";

import { CookieUser } from "@/types/user.types";

type UserAccountProps = { user: CookieUser };

function UserAccount({ user }: UserAccountProps) {
    const { ref, isOpen, toggleOpen } = useToggle();

    return (
        <div ref={ref} className="flex items-center relative">
            <motion.div {...OpacityAnimation}>
                <Button onClick={toggleOpen} variant="neutral-base" className="size-12 sm:h-12 sm:w-40">
                    <span className="hidden sm:inline-block">حساب کاربری</span>
                    <UserRounded className="w-7" />
                </Button>
            </motion.div>

            <Dropdown className={`absolute left-0 top-full w-72 dark:bg-gray-800 shadow-lg shadow-gray-100 dark:shadow-none transition-all duration- transform-gpu ${isOpen ? "visible opacity-100 mt-4" : "invisible opacity-0 mt-6"}`}>
                <DropdownHeader className="flex items-center gap-x-4 p-2">
                    <Avatar src={user.profile} className="size-16" />
                    <div className="flex flex-col gap-y-2 transform-gpu">
                        <span className="font-pelak-medium text-md text-gray-800 dark:text-gray-200 line-clamp-1">{user.username}</span>
                        <div className="flex items-center gap-x-2">
                            <span className="text-sm text-gray-600 dark:text-gray-400">{user.phone}</span>
                            <Badge>کاربر قرآن‌آرا</Badge>
                        </div>
                    </div>
                </DropdownHeader>
                <Slice />
                <DropdownBody>
                    <Link href="#" className="flex items-center gap-x-2 py-2.5 px-3 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                        <HomeAngle />
                        پنل کاربری
                    </Link>
                    <Link href="#" className="flex items-center gap-x-2 py-2.5 px-3 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                        <Bag />
                        سبد خرید دوره‌ها
                    </Link>
                    <Link href="#" className="flex items-center gap-x-2 py-2.5 px-3 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                        <Folder />
                        دوره‌های من
                    </Link>
                    <Link href="#" className="flex items-center gap-x-2 py-2.5 px-3 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                        <ChatRoundLine />
                        تیکت‌های من
                    </Link>
                    <Link href="#" className="flex items-center gap-x-2 py-2.5 px-3 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                        <QuestionCircle />
                        سوالات من
                    </Link>
                    <Link href="#" className="flex items-center gap-x-2 py-2.5 px-3 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                        <UserRounded />
                        جزئیات حساب کاربری
                    </Link>
                </DropdownBody>
                <Slice />
                <DropdownFooter>
                    <button className="flex items-center gap-x-2 w-full py-2.5 px-3 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                        <Logout />
                        خروج از حساب
                    </button>
                </DropdownFooter>
            </Dropdown>
        </div>
    );
}

export default UserAccount;
