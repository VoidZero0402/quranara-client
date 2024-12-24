import { STATUS, StatusText } from "@/constants/comments";

import BadgeLight from "@/components/ui/BadgeLight";
import Button from "@/components/ui/Button";

import ChatRoundDots from "@/components/svgs/ChatRoundDots";

import DoubleCheck from "@/components/svgs/DoubleCheck";
import DangerCircle from "@/components/svgs/DangerCircle";

const StatusesVarient = {
    [STATUS.ACCEPTED]: "teal",
    [STATUS.PENDING]: "secondary",
    [STATUS.REJECTED]: "danger",
};

import { type Reply } from "@/types/comment.types";

type ReplyProps = Reply & { onAccept: (_id: string) => void; onReject: (_id: string) => void };

function Reply({ _id, content, user, status, onAccept, onReject }: ReplyProps) {
    return (
        <div className="md:space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div className="space-y-2">
                <div className="flex items-center justify-between font-pelak-medium">
                    <div className="flex items-center gap-x-1 text-gray-800 dark:text-gray-200">
                        <ChatRoundDots />
                        متن پاسخ کاربر
                    </div>
                    <span className="underline text-amber-400">{user.username}</span>
                </div>
                <p className="text-gray-800 dark:text-gray-200 leading-8">{content}</p>
            </div>
            <div className="flex flex-col-reverse md:flex-row items-end justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-max">
                    <Button size="lg" variant="filled-teal" className="w-full md:w-max" onClick={() => onAccept(_id)}>
                        <DoubleCheck />
                        تایید پاسخ کاربر
                    </Button>
                    <Button size="lg" variant="filled-danger" className="w-full md:w-max" onClick={() => onReject(_id)}>
                        <DangerCircle />
                        رد پاسخ کاربر
                    </Button>
                </div>
                <BadgeLight varient={StatusesVarient[status] as any}>{StatusText[status]}</BadgeLight>
            </div>
        </div>
    );
}

export default Reply;
