import Message from "@/components/specific/panel/tickets/Message";

import { TicketMessage } from "@/types/ticket.types";

type MessagesProps = { messages: TicketMessage[] };

function Messages({ messages }: MessagesProps) {
    return (
        <div className="space-y-4">
            {messages.map((message) => (
                <Message key={message.createdAt} {...message} />
            ))}
        </div>
    );
}

export default Messages;
