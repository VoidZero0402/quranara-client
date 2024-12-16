import { formatDate } from "@/libs/funcs";

import Avatar from "@/components/ui/Avatar";
import IconButton from "@/components/ui/IconButton";

import Layers from "@/components/svgs/Layers";
import NotificationUnreadLines from "@/components/svgs/NotificationUnreadLines";
import UserBlockRounded from "@/components/svgs/UserBlockRounded";
import UserRounded from "@/components/svgs/UserRounded";

import { User } from "@/types/user.types";

function UserRow({ username, fullname, profile, phone, createdAt }: User) {
    return (
        <tr>
            <td>
                <div className="flex gap-x-2">
                    <div className="relative">
                        <Avatar src={profile} className="size-14 rounded-full" />
                        <div className="absolute left-1 bottom-1 size-2 bg-teal-500 rounded-full">
                            <div className="size-full bg-teal-500 rounded-full animate-ping"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <span className="font-pelak-medium text-gray-800 dark:text-gray-200">{username}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{phone}</span>
                    </div>
                </div>
            </td>
            <td>{phone}</td>
            <td>{fullname}</td>
            <td>{formatDate(new Date(createdAt))}</td>
            <td>
                <div className="flex gap-x-2">
                    <IconButton label="جزئیات حساب">
                        <UserRounded />
                    </IconButton>
                    <IconButton label="اهدای دوره">
                        <Layers />
                    </IconButton>
                    <IconButton label="ارسال اعلان">
                        <NotificationUnreadLines />
                    </IconButton>
                    <IconButton label="مسدود کردن" variant="danger">
                        <UserBlockRounded />
                    </IconButton>
                </div>
            </td>
        </tr>
    );
}

export default UserRow;
