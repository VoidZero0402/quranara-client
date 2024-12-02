import Avatar from "./Avatar";
import Button from "./Button";
import Slice from "./Slice";

import Reply from "../svgs/Reply";

type CommentProps = { onReply: () => void };

function Comment({ onReply }: CommentProps) {
    return (
        <div className="space-y-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <Avatar />
                    <div className="space-y-2 font-pelak-medium text-gray-800 dark:text-gray-200">
                        <span className="block">محمدحسن خانی</span>
                        <span className="block text-sm text-gray-600 dark:text-gray-400">{new Date().toLocaleString("fa", { dateStyle: "medium", timeStyle: "short" })}</span>
                    </div>
                </div>
                <Button size="sm" className="size-12 sm:size-max">
                    <Reply />
                    <span className="hidden sm:block">پاسخ به دیدگاه</span>
                </Button>
            </div>
            <Slice />
            <div className="space-y-4">
                <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line leading-8">
                    روز بخیر استاد
                    <br />
                    من دوره قبلی رو خریداری کردم ایا لازم هست این دوره رو خریداری کنیم <br />
                    واین که این دوره خیلی تفاوت داشته یا ففظ اپدیت داشته
                    <br />
                    ممنون
                </p>
                <div className="space-y-4">
                    <ReplyComment />
                </div>
            </div>
        </div>
    );
}

function ReplyComment() {
    return (
        <div className="space-y-4 p-4 sm:p-6 bg-white dark:bg-gray-850 rounded-xl">
            <div className="flex items-center gap-x-2">
                <Avatar />
                <div className="space-y-2 font-pelak-medium text-gray-800 dark:text-gray-200">
                    <span className="block">محمدحسن خانی</span>
                    <span className="block text-sm text-gray-600 dark:text-gray-400">{new Date().toLocaleString("fa", { dateStyle: "medium", timeStyle: "short" })}</span>
                </div>
            </div>
            <Slice className="opacity-50" />
            <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line leading-8">
                روز بخیر استاد
                <br />
                من دوره قبلی رو خریداری کردم ایا لازم هست این دوره رو خریداری کنیم <br />
                واین که این دوره خیلی تفاوت داشته یا ففظ اپدیت داشته
                <br />
                ممنون
            </p>
        </div>
    );
}

export default Comment;
