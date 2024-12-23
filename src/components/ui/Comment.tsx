import { formateDateObject } from "@/libs/funcs";

import Avatar from "./Avatar";
import Button from "./Button";
import Slice from "./Slice";

import Reply from "../svgs/Reply";

import { type Comment, type Reply as ReplyType } from "@/types/comment.types";

type CommentProps = Comment & { onReply: (commentId: string, username: string) => void };

function Comment({ _id, content, pin, user, replies, createdAt, onReply }: CommentProps) {
    return (
        <div className="space-y-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <Avatar src={user.profile} />
                    <div className="space-y-2 font-pelak-medium text-gray-800 dark:text-gray-200">
                        <span className="block">{user.username}</span>
                        <span className="block text-sm text-gray-600 dark:text-gray-400">{formateDateObject(createdAt)}</span>
                    </div>
                </div>
                <div className="flex gap-x-2">
                    {pin && <div className="hidden md:flex-center py-2.5 px-4 h-11 font-pelak-medium text-sm amber-light rounded-2xl">دیدگاه پین شده</div>}
                    <Button size="sm" className="size-12 sm:size-max" onClick={() => onReply(_id, user.username)}>
                        <Reply />
                        <span className="hidden sm:block">پاسخ به دیدگاه</span>
                    </Button>
                </div>
            </div>
            <Slice className="opacity-50" />
            {pin && <div className="flex-center md:hidden w-max p-2 font-pelak-medium text-xs amber-light rounded-lg">دیدگاه پین شده</div>}
            <div className="space-y-4">
                <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line leading-8">{content}</p>
                {!!replies.length && (
                    <div className="space-y-4">
                        {replies.map((reply) => (
                            <ReplyComment key={reply._id} {...reply} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function ReplyComment({ content, user, createdAt }: ReplyType) {
    return (
        <div className="space-y-4 p-4 sm:p-6 bg-white dark:bg-gray-850 rounded-xl">
            <div className="flex items-center gap-x-2">
                <Avatar src={user.profile} />
                <div className="space-y-2 font-pelak-medium text-gray-800 dark:text-gray-200">
                    <span className="block">{user.username}</span>
                    <span className="block text-sm text-gray-600 dark:text-gray-400">{formateDateObject(createdAt)}</span>
                </div>
            </div>
            <Slice className="opacity-50" />
            <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line leading-8">{content}</p>
        </div>
    );
}

export default Comment;
