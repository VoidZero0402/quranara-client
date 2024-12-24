import { ROLES } from "@/constants/comments";

import Message from "@/components/ui/Message";

import { TicketMessage } from "@/types/ticket.types";

type MessagesProps = { messages: TicketMessage[] };

function Messages({ messages }: MessagesProps) {
    return (
        <div className="space-y-4">
            {messages.map((message) => (
                <Message key={message.createdAt} {...message} isAnswer={message.user.role === ROLES.MANAGER} />
            ))}
        </div>
    );
}

export default Messages;
