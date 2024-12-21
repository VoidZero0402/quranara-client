import { ROLES } from "@/constants/comments";

import Message from "@/components/specific/panel/tickets/Message";

import { TicketMessage } from "@/types/ticket.types";

type MessagesProps = { messages: TicketMessage[] };

function Messages({ messages }: MessagesProps) {
    return (
        <div className="flex flex-col gap-4">
            {messages?.map((message) => (
                <Message key={message.createdAt} {...message} isAnswer={message.user.role === ROLES.USER} />
            ))}
        </div>
    );
}

export default Messages;
