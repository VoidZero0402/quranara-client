import { formateDateObject } from "@/libs/funcs";

import Message from "./Message";

import Slice from "@/components/ui/Slice";
import Attached from "@/components/ui/Attached";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";
import QuestionCircle from "@/components/svgs/QuestionCircle";

import { Question, Status as StatusType } from "@/types/question.types";
import Status from "@/components/ui/Status";

type QuestionChatProps = Partial<Pick<Question, "messages" | "status">>;

function QuestionChat({ messages, status }: QuestionChatProps) {
    return (
        <>
            {messages && (
                <div className="space-y-8 p-0 sm:p-6 sm:bg-gray-50 sm:dark:bg-gray-800 rounded-xl">
                    <div className="space-y-2 p-4 bg-white dark:bg-gray-850 rounded-xl">
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-x-2 font-pelak-medium text-lg text-gray-800 dark:text-gray-200">
                                <QuestionCircle />
                                سوال شما
                            </span>
                            <span className="font-pelak-medium text-sm text-gray-800 dark:text-gray-200">{formateDateObject(messages[0].createdAt)}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line leading-8">{messages[0].content}</p>
                        {messages[0].attached && <Attached {...messages[0].attached} />}
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-x-2 font-pelak-medium text-lg text-gray-800 dark:text-gray-200">
                                <ChatRoundLine />
                                پاسخ و تبادل نظر
                            </span>
                            <Status status={status as StatusType} />
                        </div>
                        {messages.length >= 2 && (
                            <>
                                <Slice className="dark:opacity-50" />
                                <div className="space-y-4 sm:p-6 bg-white dark:bg-gray-850 rounded-xl">
                                    {messages.slice(1).map((message) => (
                                        <Message key={message.createdAt.toString()} {...message} />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default QuestionChat;
