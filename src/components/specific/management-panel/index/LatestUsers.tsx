import Link from "next/link";

import User from "./User";

import UserGroup from "@/components/svgs/UserGroup";
import LongArrowLeft from "@/components/svgs/LongArrowLeft";

import { User as UserType } from "@/types/user.types";

type LatestUsersProps = {
    users: UserType[];
};

function LatestUsers({ users }: LatestUsersProps) {
    return (
        <div className="space-y-8 w-full xl:w-1/2 py-8 px-4 sm:p-8 bg-white dark:bg-gray-850 rounded-2xl">
            <div className="flex items-center justify-center sm:justify-between gap-4">
                <span className="flex items-center gap-x-1 font-pelak-medium text-lg text-gray-800 dark:text-gray-200">
                    <UserGroup className="w-7" />
                    آخرین کاربران قرآن‌آرا
                </span>
                <Link href="/management-panel/users" className="hidden sm:flex items-center gap-x-1 font-pelak-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-amber-400 transition-colors">
                    مشاهده همه کاربران
                    <LongArrowLeft />
                </Link>
            </div>
            <div className="space-y-4">
                {users.map((user) => (
                    <User key={user._id} {...user} />
                ))}
            </div>
            <Link href="/management-panel/users" className="flex sm:hidden justify-center items-center gap-x-1 font-pelak-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-amber-400 transition-colors">
                مشاهده همه کاربران
                <LongArrowLeft />
            </Link>
        </div>
    );
}

export default LatestUsers;
