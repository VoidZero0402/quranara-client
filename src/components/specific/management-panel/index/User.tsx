import { formateDateObject } from "@/libs/funcs";

import Avatar from "@/components/ui/Avatar";

import { type User } from "@/types/user.types";

function User({ username, profile, phone, createdAt }: User) {
    return (
        <div className="flex items-center justify-between p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
            <div className="flex gap-x-2">
                <div className="relative">
                    <Avatar src={profile} className="size-14 rounded-full" />
                    <div className="absolute left-1 bottom-1 size-2 bg-teal-500 rounded-full">
                        <div className="size-full bg-teal-500 rounded-full animate-ping"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <span className="font-pelak-medium text-sm sm:text-base text-gray-800 dark:text-gray-200">{username}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{phone}</span>
                </div>
            </div>
            <div className="font-pelak-medium text-sm sm:text-base text-gray-800 dark:text-gray-200">{formateDateObject(new Date(createdAt))}</div>
        </div>
    );
}

export default User;
