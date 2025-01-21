"use client";

import { useCallback, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import useEffectState from "@/hooks/useEffectState";

import { getUser } from "@/libs/apis";

import OffCanvas, { OffCanvasHeader, OffCanvasInstanceProps } from "@/components/ui/OffCanvas";

import AnswerTicketForm from "@/components/form/template/management-panel/AnswerTicketForm";

import Messages from "./Messages";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";

import { AnswerTicketSchemaType } from "@/validators/tickets";
import { Ticket, TicketMessage } from "@/types/ticket.types";

type ChatOffCanvasProps = OffCanvasInstanceProps & { ticket: Ticket };

function ChatOffCanvas({ isOpen, onClose, ticket }: ChatOffCanvasProps) {
    const [messages, setMessages] = useEffectState(ticket?.messages);
    const messagesRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesRef.current?.scrollTo({ left: 0, top: messagesRef.current.scrollHeight });
    }, [messages]);

    const onMessage = useCallback(async (data: AnswerTicketSchemaType) => {
        const user = await getUser();

        if (user) {
            const message: TicketMessage = {
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
        }
    }, []);

    return (
        <OffCanvas isOpen={isOpen} onClose={onClose}>
            <OffCanvasHeader>
                <div className="flex items-center gap-x-2">
                    <ChatRoundLine className="w-6 shrink-0" />
                    <span className="leading-7">{ticket?.title}</span>
                </div>
            </OffCanvasHeader>
            {ticket && (
                <div className="h-[calc(100%-48px)] flex flex-col">
                    <div ref={messagesRef} className="grow overflow-auto with-custom-scroll with-custom-scroll--padding">
                        <Messages messages={messages} />
                    </div>
                    <div className="pt-4 px-4 bg-white dark:bg-gray-850">
                        <AnswerTicketForm ticketId={ticket._id} onMessage={onMessage} />
                    </div>
                </div>
            )}
        </OffCanvas>
    );
}

export default ChatOffCanvas;
