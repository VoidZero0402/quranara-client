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

type NotificationRowProps = { notification: Notification; onPreview: (notification: Notification) => void; onUpdate: (notification: Notification) => void; onRemove: (notification: Pick<Notification, "_id" | "title">) => void };

function NotificationRow({ notification, onPreview, onUpdate, onRemove }: NotificationRowProps) {
    return (
        <tr>
            <td>{limitStringLength(notification.title, 48)}</td>
            <td>
                <BadgeLight varient={TypesVarient[notification.type] as any}>{TypesText[notification.type]}</BadgeLight>
            </td>
            <td>{formatDate(new Date(notification.createdAt ?? Date.now()))}</td>
            <td>
                <div className="flex gap-x-2">
                    <IconButton label="پیش نمایش" variant="teal" onClick={() => onPreview(notification)}>
                        <Eye />
                    </IconButton>
                    <IconButton label="ویرایش" onClick={() => onUpdate(notification)}>
                        <PenSquare />
                    </IconButton>
                    <IconButton label="حذف دائمی" variant="danger" onClick={() => onRemove({ _id: notification._id, title: notification.title })}>
                        <Trash />
                    </IconButton>
                </div>
            </td>
        </tr>
    );
}

export default NotificationRow;
