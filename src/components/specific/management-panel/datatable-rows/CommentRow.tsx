"use client";

import { STATUS, StatusText, REPLIES_STATUS } from "@/constants/comments";

import { formateDateObject, limitStringLength } from "@/libs/funcs";

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

type CommentRowProps = { comment: Comment; field: FieldSource; onPreviewAnswer: (comment: Comment) => void; onManageReplies: (comment: Comment) => void; onAccept: (_id: string) => void; onReject: (_id: string) => void; onPin: (_id: string) => void; onUnpin: (_id: string) => void };

function CommentRow({ comment, field, onPreviewAnswer, onManageReplies, onAccept, onReject, onPin, onUnpin }: CommentRowProps) {
    return (
        <tr>
            <td>{limitStringLength(comment[field]?.title ?? "", 25)}</td>
            <td>
                <span className="underline text-amber-400">{comment.user.username}</span>
            </td>
            <td>
                <BadgeLight varient={StatusesVarient[comment.status] as any}>{comment.repliesStatus === REPLIES_STATUS.PENDING ? "دارای پاسخ جدید" : StatusText[comment.status]}</BadgeLight>
            </td>
            <td>{comment.pin ? <BadgeLight varient="secondary">پین شده</BadgeLight> : <BadgeLight>پین نشده</BadgeLight>}</td>
            <td>{formateDateObject(comment.createdAt ?? Date.now())}</td>
            <td>
                <div className="flex gap-x-2">
                    <IconButton label="مشاهده و پاسخ" variant="teal" onClick={() => onPreviewAnswer(comment)}>
                        <ChatRoundDots />
                    </IconButton>
                    {comment.status !== STATUS.REJECTED && (
                        <IconButton label="مدیریت پاسخ‌ها" onClick={() => onManageReplies(comment)}>
                            <Reply />
                        </IconButton>
                    )}
                    {comment.status === STATUS.ACCEPTED ? (
                        <IconButton label="رد کردن نظر" variant="danger" onClick={() => onReject(comment._id)}>
                            <DangerCircle />
                        </IconButton>
                    ) : (
                        <IconButton label="تایید نظر" variant="teal" onClick={() => onAccept(comment._id)}>
                            <DoubleCheck />
                        </IconButton>
                    )}
                    {comment.status === STATUS.PENDING && (
                        <IconButton label="رد کردن نظر" variant="danger" onClick={() => onReject(comment._id)}>
                            <DangerCircle />
                        </IconButton>
                    )}
                    {comment.status === STATUS.ACCEPTED && (
                        <>
                            {comment.pin ? (
                                <IconButton label="برداشتن پین" variant="secondary" onClick={() => onUnpin(comment._id)}>
                                    <CircleTopDown />
                                </IconButton>
                            ) : (
                                <IconButton label="پین کردن" variant="secondary" onClick={() => onPin(comment._id)}>
                                    <CircleTopUp />
                                </IconButton>
                            )}
                        </>
                    )}
                </div>
            </td>
        </tr>
    );
}

export default CommentRow;
