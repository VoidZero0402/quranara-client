import { RolesText } from "@/constants/roles";

import { formatDate } from "@/libs/funcs";

import Attached from "@/components/ui/Attached";
import Avatar from "@/components/ui/Avatar";
import Slice from "@/components/ui/Slice";

import { TicketMessage } from "@/types/ticket.types";

type MessageProps = { isAnswer: boolean } & TicketMessage;

function Message({ content, user, createdAt, attached, isAnswer }: MessageProps) {
    return (
        <div className={`space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl md:w-1/2 ${isAnswer ? "md:mr-auto" : ""}`}>
            {isAnswer && (
                <div className="flex items-center gap-x-2">
                    <Avatar src={user.profile} className="size-14" />
                    <div className="space-y-2 font-pelak-medium text-gray-800 dark:text-gray-200">
                        <span className="block">{user.username}</span>
                        <span className="block text-sm text-gray-600 dark:text-gray-400">{RolesText[user.role]} قرآن‌آرا</span>
                    </div>
                </div>
            )}
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-8">{content}</p>
            {attached && <Attached {...attached} />}
            <Slice className="dark:opacity-50" />
            <div className="flex items-center justify-between text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <span>{formatDate(new Date(createdAt))}</span>
                <span>{new Date(createdAt).toLocaleTimeString("fa", { timeStyle: "short" })}</span>
            </div>
        </div>
    );
}

export default Message;
