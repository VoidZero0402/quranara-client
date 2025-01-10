"use client";

import { STATUS, StatusText } from "@/constants/questions";

import { formateDateObject } from "@/libs/funcs";

import BadgeLight from "@/components/ui/BadgeLight";
import IconButton from "@/components/ui/IconButton";
import LimitedString from "@/components/ui/LimitedString";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";
import SquareTopUp from "@/components/svgs/SquareTopUp";

const StatusVarients = {
    [STATUS.ACTIVE]: "teal",
    [STATUS.SLEEP]: "secondary",
    [STATUS.COLSED]: "danger",
};

import { Question } from "@/types/question.types";

type QuestionRowProps = { question: Question; onChat: (question: Question) => void; onClose: (_id: string) => void };

function QuestionRow({ question, onChat, onClose }: QuestionRowProps) {
    return (
        <tr>
            <td>
                <LimitedString text={question.title} limit={40} />
            </td>
            <td>
                <span className="underline text-amber-400">{question.user.username}</span>
            </td>
            <td>
                <BadgeLight varient={StatusVarients[question.status] as any}>{StatusText[question.status]}</BadgeLight>
            </td>
            <td>{formateDateObject(question.updatedAt)}</td>
            <td>
                <div className="flex gap-x-2">
                    <IconButton label="مشاهده و پاسخ" variant="teal" onClick={() => onChat(question)}>
                        <ChatRoundLine />
                    </IconButton>
                    {question.status !== STATUS.COLSED && (
                        <IconButton label="بستن پرسش" variant="danger" onClick={() => onClose(question._id)}>
                            <SquareTopUp />
                        </IconButton>
                    )}
                </div>
            </td>
        </tr>
    );
}

export default QuestionRow;
