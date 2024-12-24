"use cleint";

import { useState, useEffect, useCallback, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import { getCookieUser } from "@/libs/apis";

import Messages from "./Messages";

import OffCanvas, { OffCanvasHeader, OffCanvasInstanceProps } from "@/components/ui/OffCanvas";

import AnswerQuestionForm from "@/components/form/template/management-panel/AnswerQuestionForm";

import Layers from "@/components/svgs/Layers";

import { AnswerQuestionSchemaType } from "@/validators/questions";
import { CookieUser } from "@/types/user.types";
import { Question, QuestionMessage } from "@/types/question.types";
import UserQuestion from "./UserQuestion";

type ChatOffCanvasProps = OffCanvasInstanceProps & { question: Question };

function ChatOffCanvas({ isOpen, onClose, question }: ChatOffCanvasProps) {
    const [messages, setMessages] = useState(question?.messages.slice(1));

    useEffect(() => {
        setMessages(question?.messages.slice(1));
    }, [question?.messages]);

    const messagesRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesRef.current?.scrollTo({ left: 0, top: messagesRef.current.scrollHeight });
    }, [messages]);

    const onMessage = useCallback(async (data: AnswerQuestionSchemaType) => {
        const user = (await getCookieUser()) as CookieUser;

        const message: QuestionMessage = {
            ...data,
            createdAt: Date.now(),
            user: {
                _id: uuidv4(),
                role: user.role,
                username: user.username,
                profile: user.profile,
            },
        };

        setMessages((messages) => [...messages, message]);
    }, []);

    return (
        <OffCanvas isOpen={isOpen} onClose={onClose}>
            <OffCanvasHeader>
                <div className="flex items-center gap-x-2">
                    <Layers className="w-6 shrink-0" />
                    <span className="leading-7">{question?.title}</span>
                </div>
            </OffCanvasHeader>
            {question && (
                <div className="h-full flex flex-col">
                    <div ref={messagesRef} className="grow space-y-4 overflow-auto with-custom-scroll with-custom-scroll--padding">
                        <UserQuestion {...question.messages[0]} />
                        <Messages messages={messages} />
                    </div>
                    <div className="min-h-[280px] sm:min-h-48 shrink-0 p-4 bg-white dark:bg-gray-850">
                        <AnswerQuestionForm questionId={question._id} onMessage={onMessage} />
                    </div>
                </div>
            )}
        </OffCanvas>
    );
}

export default ChatOffCanvas;
