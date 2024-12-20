"use client";

import { TYPES, TypesText } from "@/constants/notifications";

import { formatDate, limitStringLength } from "@/libs/funcs";

import BadgeLight from "@/components/ui/BadgeLight";
import IconButton from "@/components/ui/IconButton";

import Eye from "@/components/svgs/Eye";
import PenSquare from "@/components/svgs/PenSquare";
import Trash from "@/components/svgs/Trash";

const TypesVarient = {
    [TYPES.GLOBAL]: "secondary",
    [TYPES.COURSE_REGISTERS]: "gray",
    [TYPES.ONE_USER]: "primary",
};

import { Notification } from "@/types/notification.types";

type NotificationRowProps = { notification: Notification };

function NotificationRow({ notification }: NotificationRowProps) {
    return (
        <tr>
            <td>{limitStringLength(notification.title, 48)}</td>
            <td>
                <BadgeLight varient={TypesVarient[notification.type] as any}>{TypesText[notification.type]}</BadgeLight>
            </td>
            <td>{formatDate(new Date(notification.createdAt ?? Date.now()))}</td>
            <td>
                <div className="flex gap-x-2">
                    <IconButton label="پیش نمایش" variant="teal">
                        <Eye />
                    </IconButton>
                    <IconButton label="ویرایش">
                        <PenSquare />
                    </IconButton>
                    <IconButton label="حذف دائمی" variant="danger">
                        <Trash />
                    </IconButton>
                </div>
            </td>
        </tr>
    );
}

export default NotificationRow;
