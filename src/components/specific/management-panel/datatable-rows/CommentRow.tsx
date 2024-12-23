"use client";

import { STATUS, StatusText } from "@/constants/comments";

import { formatDate, limitStringLength } from "@/libs/funcs";

import BadgeLight from "@/components/ui/BadgeLight";
import IconButton from "@/components/ui/IconButton";

import ChatRoundDots from "@/components/svgs/ChatRoundDots";
import DoubleCheck from "@/components/svgs/DoubleCheck";
import DangerCircle from "@/components/svgs/DangerCircle";
import CircleTopDown from "@/components/svgs/CircleTopDown";
import CircleTopUp from "@/components/svgs/CircleTopUp";
import Reply from "@/components/svgs/Reply";

const StatusesVarient = {
    [STATUS.ACCEPTED]: "teal",
    [STATUS.PENDING]: "secondary",
    [STATUS.REJECTED]: "danger",
};

import { Comment, FieldSource } from "@/types/comment.types";

type CommentRowProps = { comment: Comment; field: FieldSource };

function CommentRow({ comment, field }: CommentRowProps) {
    return (
        <tr>
            <td>{limitStringLength(comment[field]?.title ?? "", 25)}</td>
            <td>
                <span className="underline text-amber-400">{comment.user.username}</span>
            </td>
            <td>
                <BadgeLight varient={StatusesVarient[comment.status] as any}>{StatusText[comment.status]}</BadgeLight>
            </td>
            <td>{comment.pin ? <BadgeLight varient="secondary">پین شده</BadgeLight> : <BadgeLight>پین نشده</BadgeLight>}</td>
            <td>{formatDate(new Date(comment.createdAt ?? Date.now()))}</td>
            <td>
                <div className="flex gap-x-2">
                    <IconButton label="مشاهده و پاسخ" variant="teal">
                        <ChatRoundDots />
                    </IconButton>
                    {comment.status !== STATUS.REJECTED && (
                        <IconButton label="مدیریت پاسخ‌ها">
                            <Reply />
                        </IconButton>
                    )}
                    {comment.status === STATUS.PENDING ? (
                        <IconButton label="تایید نظر" variant="teal">
                            <DoubleCheck />
                        </IconButton>
                    ) : (
                        <IconButton label="رد کردن نظر" variant="danger">
                            <DangerCircle />
                        </IconButton>
                    )}
                    {comment.pin ? (
                        <IconButton label="برداشتن پین" variant="secondary">
                            <CircleTopDown />
                        </IconButton>
                    ) : (
                        <IconButton label="پین کردن" variant="secondary">
                            <CircleTopUp />
                        </IconButton>
                    )}
                </div>
            </td>
        </tr>
    );
}

export default CommentRow;
