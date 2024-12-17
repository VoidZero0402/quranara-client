"use client";

import { formatDate } from "@/libs/funcs";

import Avatar from "@/components/ui/Avatar";
import IconButton from "@/components/ui/IconButton";

import UserCheckRounded from "@/components/svgs/UserCheckRounded";

import { Ban } from "@/types/ban.types";

type BanUserRowProps = { ban: Ban; onUnbanUser: (payload: { ban: string }) => void };

function BanUserRow({ ban: { _id, user, createdAt }, onUnbanUser }: BanUserRowProps) {
    return (
        <tr>
            <td>
                <div className="flex gap-x-2">
                    <div className="relative">
                        <Avatar src={user.profile ?? undefined} className="size-14 rounded-full" />
                        <div className="absolute left-1 bottom-1 size-2 bg-teal-500 rounded-full">
                            <div className="size-full bg-teal-500 rounded-full animate-ping"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <span className="font-pelak-medium text-gray-800 dark:text-gray-200">{user.username}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{user.phone}</span>
                    </div>
                </div>
            </td>
            <td>{user.phone}</td>
            <td>{user.fullname}</td>
            <td>{formatDate(new Date(user.createdAt ?? Date.now()))}</td>
            <td>{formatDate(new Date(createdAt ?? Date.now()))}</td>
            <td>
                <div>
                    <IconButton label="رفع مسدودیت" variant="teal" onClick={() => onUnbanUser({ ban: _id })}>
                        <UserCheckRounded />
                    </IconButton>
                </div>
            </td>
        </tr>
    );
}

export default BanUserRow;
